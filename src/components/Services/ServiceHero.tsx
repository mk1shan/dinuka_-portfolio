import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import ImageOptimizer from '../ui/ImageOptimizer';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ServiceHero = ({ title, description, image, category }: ServiceHeroProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-end">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <ImageOptimizer
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Category Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <span className="px-3 py-1 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-400 text-sm">
              {category}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 leading-none">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Showreel</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm flex items-center space-x-2"
            >
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHero;