import React from 'react';
import { motion } from 'framer-motion';
import ImageOptimizer from '../ui/ImageOptimizer';

interface GalleryImage {
  src: string;
  category: string;
}

interface ServiceGalleryProps {
  images: GalleryImage[];
}

const ServiceGallery = ({ images }: ServiceGalleryProps) => {
  return (
    <div className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Latest Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-square overflow-hidden"
            >
              <ImageOptimizer
                src={image.src}
                alt={image.category}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;