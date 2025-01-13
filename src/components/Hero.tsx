import React from 'react';
import { Camera, Film, Calendar } from 'lucide-react';
import BlurBackground from './ui/BlurBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BlurBackground />
      
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/70 to-[#070B14]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Capturing Life's
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Beautiful Moments</span>
        </h1>
        <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
          Professional photographer, videographer, and event planner bringing your vision to life
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: Camera, text: "Photography" },
            { icon: Film, text: "Videography" },
            { icon: Calendar, text: "Event Planning" }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-blue-200/80 backdrop-blur-sm bg-blue-900/20 px-4 py-2 rounded-lg">
              <item.icon className="text-blue-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;