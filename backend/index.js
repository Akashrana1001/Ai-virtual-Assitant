// server/index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import mongoose from "mongoose";

import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import { handleAssistant } from "./controllers/aiController.resilient.js"; // ✅ resilient AI handler
import aiRouter from "./routes/ai.routes.js";

// after other app.use()

dotenv.config();
const app = express();

app.use("/api/assistant", aiRouter);

// ===== Middlewares =====
app.use(helmet()); // security headers
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(morgan("dev")); // request logging

// Rate limiter (avoid abuse)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 120,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.get("/health", (req, res) => {
  res.json({ status: "ok", db: "connected" });
});

// ===== Routes =====
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// AI assistant endpoint
app.post("/api/assistant", handleAssistant);

// Health check
app.get("/health", (req, res) => {
  const dbState = mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  res.json({
    status: "ok",
    db: dbState,
    uptime: process.uptime(),
  });
});

// 404 handler
app.use((req, res) => res.status(404).json({ message: "Not Found" }));

// ===== Start server =====
const port = process.env.PORT || 5000;

app.listen(port, () => {
  connectDb();
  console.log(`🚀 Server running on http://localhost:${port}`);
});
