import React from 'react';
import { Camera, Film, Calendar } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import SectionBackground from '../ui/SectionBackground';

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Specializing in capturing life's precious moments through creative and professional photography. From events to portraits, I bring artistic vision to every shot.",
    features: ["Wedding Photography", "Portrait Sessions", "Event Coverage", "Commercial Shoots"]
  },
  {
    icon: Film,
    title: "Videography",
    description: "Creating compelling visual stories through expert videography. I transform moments into cinematic experiences that leave lasting impressions.",
    features: ["Wedding Films", "Music Videos", "Corporate Videos", "Event Documentation"]
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "As the founder of DADA Entertainment, I offer comprehensive event planning services that bring your vision to life with meticulous attention to detail.",
    features: ["Wedding Planning", "Corporate Events", "Social Gatherings", "Festival Management"]
  }
];

export const HomeServices = () => {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <SectionBackground variant="purple" intensity="medium" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle 
            title="My Services"
            description="Professional creative services tailored to your needs"
          />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden">
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Content */}
                <div className="relative p-8 backdrop-blur-sm bg-white/[0.02] rounded-2xl border border-white/5 h-full">
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative bg-white/[0.03] p-4 rounded-2xl border border-white/10 w-fit">
                      <service.icon className="w-8 h-8 text-primary-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Decoration */}
                  <div className="absolute top-4 right-4 flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-${i * 100}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};