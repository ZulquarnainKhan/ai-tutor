import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateTutorResponse } from '../services/geminiClient.js';

export const useTutorStore = create(
  persist(
    (set, get) => ({
      messages: [],
      studentLevel: 'beginner',
      chatHistory: '',
      isLoading: false,

      addMessage: (role, content) => {
        const { messages } = get();
        set({ 
          messages: [...messages, { role, content, id: Date.now() }],
          chatHistory: messages.map(m => `${m.role}: ${m.content}`).join('\n') + `\nStudent: ${content}`
        });
      },

      sendMessage: async (message) => {
        const { studentLevel, addMessage } = get();
        set({ isLoading: true });

        addMessage('user', message);
        
        const response = await generateTutorResponse(message, studentLevel, get().chatHistory);
        addMessage('assistant', response);

        set({ isLoading: false });
      },

      updateLevel: (level) => set({ studentLevel: level }),
      clearChat: () => set({ messages: [], chatHistory: '' }),
    }),
    { name: 'ai-tutor-storage' }
  )
);
