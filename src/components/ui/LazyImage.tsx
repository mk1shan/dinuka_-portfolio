import React from 'react';
import { motion } from 'framer-motion';
import { useImageLoader } from '../../hooks/useImageLoader';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className = '' }: LazyImageProps) => {
  const isLoaded = useImageLoader(src);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      className="relative w-full h-full"
    >
      {/* Low quality placeholder */}
      <div 
        className="absolute inset-0 bg-gray-900 animate-pulse"
        style={{ display: isLoaded ? 'none' : 'block' }}
      />
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      />
    </motion.div>
  );
};

export default LazyImage;