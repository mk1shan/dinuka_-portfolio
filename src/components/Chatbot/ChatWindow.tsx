import { motion } from 'framer-motion';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface ChatWindowProps {
  messages: Array<{ text: string; isUser: boolean }>;
  input: string; 
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const ChatWindow = ({
  messages,
  input,
  onInputChange, 
  onSubmit,
  onClose,
  inputRef,
  messagesEndRef
}: ChatWindowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 
        w-full sm:w-96 h-[80vh] sm:h-[600px]
        bg-gradient-to-b from-dark/95 to-dark/90 
        backdrop-blur-lg rounded-none sm:rounded-2xl
        shadow-2xl border-t sm:border border-white/10 
        overflow-hidden z-50 flex flex-col"
    >
      <ChatHeader onClose={onClose} />
      
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto custom-scrollbar space-y-3 sm:space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        value={input}
        onChange={onInputChange}
        onSubmit={onSubmit} 
        inputRef={inputRef}
      />
    </motion.div>
  );
};

export default ChatWindow;
