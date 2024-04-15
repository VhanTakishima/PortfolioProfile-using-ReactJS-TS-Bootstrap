/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import express, { Express, NextFunction, Request, Response } from "express";
import noteRoutes from "./routes/notes";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors"; // Import CORS middleware

const app = express();
// Parse JSON request bodies
app.use(express.json());

// Add CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
  })
);

app.use(morgan("dev"));

app.use("/api/notes", noteRoutes);

// Error handling middleware
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  // Ensure JSON response
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
