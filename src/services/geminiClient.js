import { GoogleGenerativeAI } from '@google/generative-ai';
import { getTutorPrompt } from '../utils/prompts.js';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY 

if (!apiKey) {
  console.error('❌ VITE_GEMINI_API_KEY is not set!');
} else {
  console.log('✅ API Key loaded successfully');
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function generateTutorResponse(message, level, history = '') {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash', // ✅ Stable model for tutor responses
      // alternatives if needed:
      // 'gemini-2.5-flash' - newer, even better
      // 'gemini-2.0-flash-lite' - fastest/cheapest
    });

    const prompt = getTutorPrompt(message, level, history);
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error('Gemini API error:', error);
    return "I'm having trouble connecting right now. Try rephrasing your question!";
  }
}