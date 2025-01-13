import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import ParallaxScroll from '../ui/ParallaxScroll';
import ImageOptimizer from '../ui/ImageOptimizer';

const galleryItems = [
  {
    url: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&q=80&w=1200",
    category: "Portrait",
    title: "Natural Light Portraits",
    gridClass: "md:col-span-2 md:row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200",
    category: "Nature",
    title: "Landscape Stories",
    gridClass: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=1200",
    category: "Wedding",
    title: "Eternal Moments",
    gridClass: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1200",
    category: "Event",
    title: "Corporate Excellence",
    gridClass: "md:col-span-1 md:row-span-2"
  }
];

export const HomeGallery = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">
                Portfolio
              </span>
            </motion.div>
            <motion.h2 
              className="mt-4 text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured Works
            </motion.h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[400px]">
          {galleryItems.map((item, index) => (
            <ParallaxScroll 
              key={index} 
              offset={30}
              className={item.gridClass}
            >
              <ScrollReveal delay={index * 0.1}>
                <motion.div
                  className="group relative h-full"
                  whileHover="hover"
                >
                  <div className="h-full overflow-hidden rounded-2xl">
                    <motion.div
                      className="h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageOptimizer
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        width={1200}
                        quality={90}
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="block text-primary-400 text-sm font-medium mb-3">
                          {item.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {item.title}
                        </h3>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center text-white/90 hover:text-white group"
                        >
                          <span className="text-lg">View Project</span>
                          <svg 
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M17 8l4 4m0 0l-4 4m4-4H3" 
                            />
                          </svg>
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            </ParallaxScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;