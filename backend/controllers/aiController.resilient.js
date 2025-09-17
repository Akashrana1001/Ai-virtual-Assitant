// controllers/aiController.resilient.js
import axios from "axios";

const MAX_RETRIES = 3;
const TIMEOUT = 5000; // 5s timeout for API calls

// Utility: delay for exponential backoff
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleAssistant = async (req, res, next) => {
  const { command, assistantName = "Assistant", userName = "User" } = req.body;

  const apiUrl = process.env.GEMINI_API_URL;

  const prompt = `You are a virtual assistant named ${assistantName} created by ${userName}. 
You are not Google. You will now behave like a voice-enabled assistant.

Your task is to understand the user's natural language input and respond with a JSON object like this:

{
  "type": "general" | "google-search" | "youtube-search" | "youtube-play" | "get-time" | "get-date" | "get-day" | "get-month" | "calculator-open" | "instagram-open" | "facebook-open" | "weather-show",
  "userInput": "<original user input>" {remove your name if it exists},
  "response": "<a short spoken response to read out loud>"
}

Type meanings:
- "general": factual or informational Qs (short reply)
- "google-search": Google search intent
- "youtube-search": YouTube search intent
- "youtube-play": play video/song
- "calculator-open": open calculator
- "instagram-open": open Instagram
- "facebook-open": open Facebook
- "weather-show": weather info
- "get-time": current time
- "get-date": today’s date
- "get-day": which day it is
- "get-month": current month

Important:
- Use ${userName} if someone asks who created you.
- Only respond with JSON. Nothing else.

Now your userInput → ${command}
`;

  let attempt = 0;
  while (attempt < MAX_RETRIES) {
    try {
      const result = await axios.post(
        apiUrl,
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        { timeout: TIMEOUT }
      );

      const textResponse =
        result?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!textResponse) throw new Error("Empty response from Gemini");

      return res.json({
        success: true,
        data: JSON.parse(textResponse),
      });
    } catch (error) {
      attempt++;
      console.error(`⚠️ Attempt ${attempt} failed:`, error.message);

      if (attempt < MAX_RETRIES) {
        await delay(500 * attempt); // exponential backoff
      } else {
        return res.status(500).json({
          success: false,
          message: "AI Assistant service unavailable. Please try again later.",
        });
      }
    }
  }
};
