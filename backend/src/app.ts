/* eslint-disable @typescript-eslint/no-unused-vars */
import "dotenv/config";
import express, { Express, NextFunction, Request, Response } from "express";
import noteRoutes from "./routes/notes";
import userRoutes from "./routes/users";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors"; // Import CORS middleware
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";

const app = express();
// Parse JSON request bodies
app.use(express.json());

// Add CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
  })
);
//express-session middleware
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({ mongoUrl: env.MONGO_CONNECTION_STRING }),
  })
);
app.use(morgan("dev"));

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

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
