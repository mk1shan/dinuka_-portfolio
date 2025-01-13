import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const HeroContent = () => {
  return (
    <div className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div 
            variants={item}
            className="inline-flex items-center space-x-2 mb-8"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary-500 to-transparent" />
            <span className="text-sm font-medium text-primary-400 tracking-wider uppercase">
              Capturing Life's Beauty
            </span>
          </motion.div>
          
          {/* Main heading */}
          <motion.div variants={item} className="space-y-2 mb-8">
            {['Through', 'The Lens of', 'Artistry'].map((text, index) => (
              <h1 
                key={index}
                className={`text-6xl md:text-8xl font-bold tracking-tight ${
                  index === 2 ? 'bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 bg-clip-text text-transparent' : 'text-white'
                }`}
              >
                {text}
              </h1>
            ))}
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={item}
            className="text-gray-300 text-xl leading-relaxed mb-12 max-w-2xl"
          >
            Where every frame tells a story, and every moment becomes timeless. 
            We specialize in turning fleeting instances into eternal memories.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={item}>
            <Link 
              to="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-400 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-500 transition-all duration-300 shadow-lg shadow-primary-500/20"
            >
              Start Your Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;