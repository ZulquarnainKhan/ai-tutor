import { cn } from '../../utils/cn';
import { MessageSquare, User, Bot } from 'lucide-react';

export const ChatBubble = ({ role, content, className }) => {
  const isUser = role === 'user';
  return (
    <div className={cn(
      'group max-w-[80%] p-4 rounded-2xl shadow-lg backdrop-blur-sm',
      'border border-white/10',
      isUser 
        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white ml-auto' 
        : 'bg-white/10 text-white',
      className
    )}>
      <div className="flex items-start gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-all">
        {isUser ? <User className="w-5 h-5 flex-shrink-0 mt-0.5" /> : <Bot className="w-5 h-5 flex-shrink-0 mt-0.5" />}
      </div>
      <p className="whitespace-pre-wrap">{content}</p>
    </div>
  );
};
