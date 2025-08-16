import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

// initialize client with API key from .env
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// function to generate content
async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash", // updated model name
    contents: prompt
  });

  return response.text();
}

export default generateContent;
