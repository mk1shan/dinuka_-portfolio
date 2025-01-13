import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Users, Heart, Building, X } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import ScrollReveal from '../components/ui/ScrollReveal';
import ImageOptimizer from '../components/ui/ImageOptimizer';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Capturing your special moments with artistic vision"
    },
    {
      icon: Users,
      title: "Family Portraits",
      description: "Beautiful family portraits that tell your story"
    },
    {
      icon: Building,
      title: "Corporate Events",
      description: "Professional coverage for business events"
    },
    {
      icon: Camera,
      title: "Fashion Photography",
      description: "Creative fashion and model photography"
    }
  ];

  // Portfolio grid configuration with layout information
  const portfolioImages = [
    {
      src: '/src/utils/386740768_872424397767634_2406891365353878124_n.jpg',
      span: 'col-span-2 row-span-2',
      category: 'Wedding'
    },
    {
      src: '/src/utils/430018448_719210467048641_4958362212388547001_n.jpg',
      span: 'col-span-1 row-span-1',
      category: 'Portrait'
    },
    {
      src: '/src/utils/409082841_719210353715319_1512343650740324422_n.jpg',
      span: 'col-span-1 row-span-1',
      category: 'Event'
    },
    {
      src: '/src/utils/431679952_727171266252561_8333342145955110732_n.jpg',
      span: 'col-span-1 row-span-2',
      category: 'Fashion'
    },
    {
      src: '/src/utils/431718465_727171112919243_3864534063747622005_n.jpg',
      span: 'col-span-2 row-span-1',
      category: 'Wedding'
    },
    {
      src: '/src/utils/431383707_727171029585918_6909410846438431688_n.jpg',
      span: 'col-span-1 row-span-1',
      category: 'Portrait'
    },
    {
      src: '/src/utils/449250711_792240543078966_6040839960755229386_n.jpg',
      span: 'col-span-2 row-span-2',
      category: 'Event'
    },
    {
      src: '/src/utils/424982953_719164643719890_993065263064835104_n.jpg',
      span: 'col-span-1 row-span-1',
      category: 'Fashion'
    },
    {
      src: '/src/utils/363385928_831559638520777_2058469060770947524_n.jpg',
      span: 'col-span-1 row-span-1',
      category: 'Portrait'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageOptimizer
            src="/src/utils/472179219_920601650242854_7270190166170734193_n.jpg"
            alt="Photography Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <ScrollReveal>
            <motion.span 
              className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-400 text-sm mb-6"
            >
              Professional Photography Services
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Capturing Life's{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Beautiful Moments
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Professional photography services for weddings, events, portraits, and more.
              Creating timeless memories through the lens.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              Book a Session
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <service.icon className="w-8 h-8 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Portfolio</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${image.span}`}
                onClick={() => setSelectedImage(image.src)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <ImageOptimizer
                    src={image.src}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-2 py-1 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-400 text-sm mb-2">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 p-4 md:p-8 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              src={selectedImage}
              alt="Selected portfolio"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Photo Sessions" },
              { value: "200+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Awards Won" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Capture Your Moments?</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              Contact Us Now
            </motion.button>
          </ScrollReveal>
        </div>
      </section>
    </MainLayout>
  );
};

export default Photography;
