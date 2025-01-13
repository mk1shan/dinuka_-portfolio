import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Film, Calendar, Heart, Users, Music } from 'lucide-react';
import BlurBackground from './ui/BlurBackground';
import SectionTitle from './ui/SectionTitle';

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Professional photography services for weddings, events, portraits, and commercial shoots.",
    link: "/photography"
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Videography",
    description: "Cinematic video production including weddings, music videos, and corporate content.",
    link: "/videography"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Event Planning",
    description: "Full-service event planning and coordination for any occasion.",
    link: "/event-planning"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Wedding Services",
    description: "Comprehensive wedding photography and videography packages.",
    link: "/photography"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Corporate Events",
    description: "Professional coverage for corporate events and conferences.",
    link: "/event-planning"
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Music Videos",
    description: "Creative music video production and direction services.",
    link: "/videography"
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <BlurBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Services"
          description="Offering a comprehensive range of professional services to meet all your creative needs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group backdrop-blur-sm bg-black/40 p-8 rounded-2xl border border-gray-800 hover:bg-gray-900/40 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;