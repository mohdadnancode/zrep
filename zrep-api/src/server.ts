import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Zrep API is running",
    version: "1.0.0",
    environment: process.env.NODE_ENV,
  });
});

export default app;