import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChatToggle from './ChatToggle';
import ChatWindow from './ChatWindow';
import { findResponse } from '../../utils/chatbotKnowledge';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && messages.length === 0) {
      setMessages([{ 
        text: "Hi! I'm Dinuka's virtual assistant. How can I help you today?", 
        isUser: false 
      }]);
    }
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    const response = findResponse(input);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);

    setInput('');
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setInput('');
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-4 right-4 z-50">
            <ChatToggle onClick={() => setIsOpen(true)} />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            messages={messages}
            input={input}
            onInputChange={(e) => setInput(e.target.value)}
            onSubmit={handleSubmit}
            onClose={handleClose}
            inputRef={inputRef}
            messagesEndRef={messagesEndRef}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;