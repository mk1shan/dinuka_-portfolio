import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    category: "Portrait",
    size: "large"
  },
  {
    url: "https://images.unsplash.com/photo-1464023790021-1f5ef50d06d1?auto=format&fit=crop&q=80",
    category: "Wedding",
    size: "small"
  },
  {
    url: "https://images.unsplash.com/photo-1605428216774-48e9100b1b5f?auto=format&fit=crop&q=80",
    category: "Studio",
    size: "medium"
  },
  {
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    category: "Event",
    size: "small"
  },
  {
    url: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80",
    category: "Nature",
    size: "medium"
  }
];

const HeroGallery = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[85vh] pr-8 hidden lg:block">
      <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`group relative overflow-hidden rounded-2xl ${
              image.size === 'large' ? 'col-span-4 row-span-4' :
              image.size === 'medium' ? 'col-span-2 row-span-3' :
              'col-span-2 row-span-2'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <motion.img
              src={image.url}
              alt={image.category}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium">
                {image.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroGallery;