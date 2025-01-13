import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  priority?: boolean;
}

const ImageWithFallback = ({
  src,
  alt,
  fallback = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%23111827"/%3E%3C/svg%3E',
  className = '',
  priority = false
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(!priority);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      const preloadImage = new Image();
      preloadImage.src = src;
    }
  }, [src, priority]);

  return (
    <div className="relative overflow-hidden">
      {isLoading && !error && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}
      
      <motion.img
        src={error ? fallback : imgSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setImgSrc(fallback);
        }}
        className={`${className} ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ImageWithFallback;