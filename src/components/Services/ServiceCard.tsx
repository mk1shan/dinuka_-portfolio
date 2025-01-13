import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Link 
      to={link}
      className="group relative overflow-hidden bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 transition-all duration-500"
    >      
      <div className="relative z-10 p-8">
        {/* Icon container with glow effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-2xl transform group-hover:scale-[1.5] transition-transform duration-500" />
          <motion.div 
            className="relative bg-white/[0.03] p-4 rounded-2xl w-fit border border-white/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8 text-primary-400" />
          </motion.div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-medium text-white/90 mb-4 group-hover:text-primary-400 transition-colors duration-500">
          {title}
        </h3>
        <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
          {description}
        </p>

        {/* Learn more indicator */}
        <div className="mt-8 flex items-center text-primary-400/70">
          <span className="text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            Learn More
          </span>
          <svg 
            className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:via-primary-500/2 group-hover:to-transparent transition-all duration-500" />
      </div>
    </Link>
  );
};

export default ServiceCard;