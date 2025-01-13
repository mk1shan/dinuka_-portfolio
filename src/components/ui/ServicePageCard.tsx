import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

interface ServicePageCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onAction: () => void;
}

const ServicePageCard = ({ title, description, image, buttonText, onAction }: ServicePageCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <LazyImage 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-80 transition-opacity duration-500" />
      </motion.div>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
          <div className="w-16 h-[2px] bg-primary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mx-auto md:mx-0" />
          <p className="text-gray-300 text-sm md:text-base mt-4 mb-6 max-w-md mx-auto md:mx-0">
            {description}
          </p>
          <motion.button
            onClick={onAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 py-3 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-lg text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicePageCard;