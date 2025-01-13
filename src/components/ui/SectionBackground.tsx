import React from 'react';
import { motion } from 'framer-motion';

interface SectionBackgroundProps {
  variant?: 'purple' | 'blue';
  intensity?: 'light' | 'medium' | 'strong';
}

const SectionBackground = ({ variant = 'purple', intensity = 'medium' }: SectionBackgroundProps) => {
  const getColor = () => {
    if (variant === 'purple') {
      return {
        light: 'from-primary-500/5 via-primary-500/10 to-transparent',
        medium: 'from-primary-600/20 via-primary-500/10 to-transparent',
        strong: 'from-primary-700/30 via-primary-600/20 to-transparent'
      }[intensity];
    }
    return {
      light: 'from-blue-500/5 via-blue-500/10 to-transparent',
      medium: 'from-blue-600/20 via-blue-500/10 to-transparent',
      strong: 'from-blue-700/30 via-blue-600/20 to-transparent'
    }[intensity];
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br ${getColor()} rounded-full blur-[100px] transform rotate-12`} />
        <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl ${getColor()} rounded-full blur-[100px] transform -rotate-12`} />
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r ${getColor()} rounded-full blur-sm`}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-r ${getColor()} rounded-full blur-sm`}
        />
      </div>
    </div>
  );
};

export default SectionBackground;