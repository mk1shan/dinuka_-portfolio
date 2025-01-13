import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackButton = () => {
  return (
    <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pt-24"
      >
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default BackButton;