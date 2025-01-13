import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceGridItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

const ServiceGridItem = ({ icon: Icon, title, description, featured = false }: ServiceGridItemProps) => {
  return (
    <motion.div 
      className={`relative group ${
        featured ? 'md:col-span-2 md:row-span-2' : 'col-span-1'
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full p-8 bg-white/[0.01] backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        
        {/* Icon with glow effect */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
          <div className="relative bg-white/[0.03] p-4 rounded-xl border border-white/10 w-fit">
            <Icon className="w-6 h-6 text-primary-400" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-medium text-white/90 mb-4">
          {title}
        </h3>
        <p className="text-white/50 leading-relaxed">
          {description}
        </p>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-${i * 100}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServiceGrid = () => {
  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for all occasions, capturing your precious moments with artistic precision.",
      featured: true
    },
    {
      icon: Film,
      title: "Videography",
      description: "Cinematic video production that tells your story through moving images."
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Comprehensive event planning services to make your special occasions memorable."
    },
    {
      icon: Heart,
      title: "Wedding Services",
      description: "Complete wedding photography and videography packages."
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional coverage for business events and conferences."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceGridItem
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          featured={service.featured}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;