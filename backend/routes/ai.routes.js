import express from "express";
import { handleAssistant } from "../controllers/aiController.resilient.js";
import { aiRateLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

// Protect Gemini API with rate limiter
router.post("/", aiRateLimiter, handleAssistant);

export default router;
