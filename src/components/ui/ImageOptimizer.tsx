import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageOptimizer = ({ src, alt, className = "" }: ImageOptimizerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ImageOptimizer;
