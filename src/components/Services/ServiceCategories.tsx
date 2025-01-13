import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImageOptimizer from '../ui/ImageOptimizer';
import ParallaxScroll from '../ui/ParallaxScroll';

interface Category {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ServiceCategoriesProps {
  categories: Category[];
}

const ServiceCategories = ({ categories }: ServiceCategoriesProps) => {
  return (
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Popular Categories
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <ParallaxScroll key={index} offset={index % 2 === 0 ? 30 : -30}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden rounded-2xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageOptimizer
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-90" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-gray-300 text-sm">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <motion.div 
                      className="mt-6 inline-flex items-center space-x-2 text-primary-400"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ParallaxScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;