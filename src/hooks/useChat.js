import { useTutorStore } from '../store/useTutorStore';

export const useChat = () => {
  const { messages, sendMessage, isLoading, clearChat } = useTutorStore();
  return { messages, sendMessage, isLoading, clearChat };
};
