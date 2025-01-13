import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const ChatInput = ({ value, onChange, onSubmit, inputRef }: ChatInputProps) => {
  return (
    <form onSubmit={onSubmit} className="p-4 border-t border-white/10 bg-white/5">
      <div className="flex space-x-2">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Ask me anything..."
          className="flex-1 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/50 border border-white/10 placeholder-white/30"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
    </form>
  );
};

export default ChatInput;