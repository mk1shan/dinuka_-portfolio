import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../ui/LazyImage';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Main background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
      >
        <LazyImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Dramatic Landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Optimized gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark" />

      {/* Performance optimized light rays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute inset-0 bg-gradient-to-tr from-primary-500/0 via-primary-500/10 to-transparent mix-blend-soft-light will-change-[opacity]"
      />
    </div>
  );
};

export default HeroBackground;