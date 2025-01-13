import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

const ServiceProcess = ({ steps }: ServiceProcessProps) => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">How We Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-start">
                <div className="text-6xl font-bold text-primary-500/20 mb-4">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-[2px] bg-primary-500/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;