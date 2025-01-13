import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <motion.div 
      className="p-4 bg-gradient-to-r from-primary-600 to-primary-500 border-b border-white/10"
      initial={false}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <h3 className="text-white font-medium text-lg">Chat Assistant</h3>
        </div>
        <motion.button 
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChatHeader;