import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const HomePortfolio = () => {
  const portfolioItems = [
    {
      category: "Photography",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      title: "Wedding Photography"
    },
    {
      category: "Videography",
      image: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d",
      title: "Music Video Production"
    },
    {
      category: "Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      title: "Corporate Event"
    },
    {
      category: "Photography",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      title: "Portrait Session"
    },
    {
      category: "Videography",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      title: "Commercial Shoot"
    },
    {
      category: "Events",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      title: "Festival Planning"
    },
  ];

  return (
    <section id="portfolio" className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle 
            title="Portfolio"
            description="Showcasing our finest work across photography, videography, and event planning"
          />
        </ScrollReveal>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10"
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-primary-400 text-sm">{item.category}</span>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};