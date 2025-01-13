import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatToggleProps {
  onClick: () => void;
}

const ChatToggle = ({ onClick }: ChatToggleProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-14 h-14 relative group"
    >
      <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-300" />
      <div className="relative w-full h-full bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer group-hover:shadow-primary-500/25 group-hover:shadow-xl transition-all duration-300">
        <MessageSquare className="w-6 h-6 text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full ring-2 ring-dark" />
      </div>
    </motion.button>
  );
};

export default ChatToggle;