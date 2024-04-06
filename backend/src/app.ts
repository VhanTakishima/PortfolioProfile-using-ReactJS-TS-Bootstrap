import "dotenv/config";
import express, { Express } from "express";
import Notemodel from "./models/node";
const app = express();

app.get("/", async (req, res) => {
  const notes = await Notemodel.find().exec();
  res.status(200).json(notes);
});

export default app;
