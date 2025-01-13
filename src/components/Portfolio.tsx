import React from 'react';
import BlurBackground from './ui/BlurBackground';
import SectionTitle from './ui/SectionTitle';

const Portfolio = () => {
  const portfolioItems = [
    {
      category: "Photography",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
      title: "Wedding Photography"
    },
    {
      category: "Videography",
      image: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?auto=format&fit=crop&q=80",
      title: "Music Video Production"
    },
    {
      category: "Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
      title: "Corporate Event"
    },
    {
      category: "Photography",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
      title: "Portrait Session"
    },
    {
      category: "Videography",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
      title: "Commercial Shoot"
    },
    {
      category: "Events",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
      title: "Festival Planning"
    },
  ];

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      <BlurBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Portfolio"
          description="Showcasing some of our finest work across photography, videography, and event planning"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-blue-950/20 border border-blue-900/30">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-blue-400 text-sm">{item.category}</span>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;