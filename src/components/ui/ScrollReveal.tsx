import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  duration?: number;
  distance?: number;
  scale?: number;
}

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  duration = 0.8,
  distance = 50,
  scale = 1
}: ScrollRevealProps) => {
  const getInitialProps = () => {
    const initial = { opacity: 0, scale };
    switch (direction) {
      case 'up': return { ...initial, y: distance };
      case 'down': return { ...initial, y: -distance };
      case 'left': return { ...initial, x: -distance };
      case 'right': return { ...initial, x: distance };
      default: return initial;
    }
  };

  return (
    <motion.div
      initial={getInitialProps()}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ 
        once: true, 
        margin: '-50px'
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;