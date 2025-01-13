import React from 'react';
import { motion } from 'framer-motion';
import ImageOptimizer from '../../ui/ImageOptimizer';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

interface PortfolioItem {
  image: string;
  category: string;
  title: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    category: "Wedding",
    title: "Eternal Moments"
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    category: "Portrait",
    title: "Natural Beauty"
  },
  {
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    category: "Nature",
    title: "Landscape Stories"
  },
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    category: "Events",
    title: "Celebration of Life"
  }
];

const PortfolioGrid = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3"
    >
      {portfolioItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg"
        >
          <ImageOptimizer
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4">
              <span className="text-primary-400 text-sm font-medium">{item.category}</span>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioGrid;