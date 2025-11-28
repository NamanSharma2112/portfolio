import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    // In a real production app, ensure this environment variable is set.
    // For this demo, we assume process.env.API_KEY is available.
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing!");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  const client = getAiClient();
  if (!client) return "Error: API Key not configured.";

  try {
    // Construct the chat history for the Gemini SDK
    // The SDK uses a specific format, but for a simple stateless request (or maintaining state manually),
    // we can use generateContent with the history as context, or use the chat API.
    // Here we use the Chat API for better context management.
    
    const chat = client.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_PROMPT,
        },
        history: history.map(h => ({
            role: h.role,
            parts: [{ text: h.text }]
        }))
    });

    const response = await chat.sendMessage({
        message: newMessage
    });

    return response.text || "I'm sorry, I couldn't generate a response.";

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to my brain. Please try again later.";
  }
};
