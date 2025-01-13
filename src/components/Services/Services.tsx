import React from 'react';
import { services } from './serviceData';
import ServiceGrid from './ServiceGrid';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] mix-blend-soft-light" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] mix-blend-soft-light" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-light text-white/90 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-transparent mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Elevating moments through professional photography, cinematic videography,
            and meticulous event planning
          </p>
        </motion.div>

        {/* Services grid */}
        <ServiceGrid />
      </div>
    </section>
  );
};

export default Services;