import React from 'react';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  text: string;
  isUser: boolean;
}

const ChatMessage = ({ text, isUser }: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-wrap ${
          isUser
            ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white'
            : 'bg-white/5 text-white/90 border border-white/10'
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default ChatMessage;