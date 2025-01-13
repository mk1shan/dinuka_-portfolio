import React from 'react';
import { motion } from 'framer-motion';
import ImageOptimizer from '../../ui/ImageOptimizer';

const HeroImage = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <ImageOptimizer
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
          alt="Hero Background"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
        
        {/* Animated overlay effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-gradient-to-tr from-primary-500/0 via-primary-500/10 to-transparent mix-blend-overlay"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;