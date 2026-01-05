import { Message } from './Message';

export const MessageList = ({ messages }) => (
  <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-4 space-y-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
    {messages.length === 0 ? (
      <div className="flex flex-col items-center justify-center h-full text-white/50">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
          💬
        </div>
        <h3 className="text-lg font-semibold mb-2">Welcome to AI Tutor!</h3>
        <p>Ask anything about programming, math, science...</p>
      </div>
    ) : (
      messages.map((msg) => (
        <Message key={msg.id} role={msg.role} content={msg.content} />
      ))
    )}
  </div>
);
