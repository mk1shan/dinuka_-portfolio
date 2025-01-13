import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { optimizeImageUrl, lazyLoadImage } from '../../utils/performance';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

const ImageOptimizer = ({
  src,
  alt,
  className = '',
  width = 1200,
  height,
  priority = false,
  quality = 75
}: ImageOptimizerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const optimizedSrc = optimizeImageUrl(src, width, quality);

    if (priority) {
      setImageSrc(optimizedSrc);
    } else if (imageRef.current) {
      lazyLoadImage(imageRef.current, () => setImageSrc(optimizedSrc));
    }
  }, [src, width, quality, priority]);

  return (
    <div ref={imageRef} className="relative overflow-hidden">
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-900 animate-pulse"
          style={height ? { height: `${height}px` } : undefined}
        />
      )}
      
      {imageSrc && (
        <motion.img
          src={imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default ImageOptimizer;