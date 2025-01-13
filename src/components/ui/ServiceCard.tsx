import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImageOptimizer from './ImageOptimizer';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  features: string[];
  buttonText: string;
  onAction: () => void;
}

const ServiceCard = ({
  title,
  description,
  image,
  price,
  features,
  buttonText,
  onAction
}: ServiceCardProps) => {
  return (
    <motion.div 
      className="group relative bg-gradient-to-b from-white/[0.05] to-transparent rounded-2xl overflow-hidden border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <ImageOptimizer
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        
        {price && (
          <div className="absolute top-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white font-medium">Starting at {price}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <motion.button
          onClick={onAction}
          className="w-full py-4 px-6 flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-lg transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;