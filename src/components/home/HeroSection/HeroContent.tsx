import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Film } from 'lucide-react';
import { useScrollToSection } from '../../../hooks/useScrollToSection';

const HeroContent = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-white/80 text-sm">Professional Creative Services</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Capturing Life's{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Beautiful Moments
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Professional photography and videography services that bring your vision to life with artistic excellence.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8"
          >
            {[
              { icon: Camera, label: "Photography" },
              { icon: Film, label: "Videography" }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group px-6 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <service.icon className="w-5 h-5 text-primary-400" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {service.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-8"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-400 text-white rounded-lg font-medium hover:from-primary-700 hover:to-primary-500 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('services')}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;