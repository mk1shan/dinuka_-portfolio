import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Users, Heart, Building, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // React Router DOM
import MainLayout from '../layouts/MainLayout';
import ScrollReveal from '../components/ui/ScrollReveal';
import ImageOptimizer from '../components/ui/ImageOptimizer';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate(); // React Router DOM navigation

  const handleBookSession = () => {
    navigate('/'); // Navigate to the home page
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to contact section
      }
    }, 100);
  };

  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capturing your special moments with artistic vision',
    },
    {
      icon: Users,
      title: 'Family Portraits',
      description: 'Beautiful family portraits that tell your story',
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Professional coverage for business events',
    },
    {
      icon: Camera,
      title: 'Fashion Photography',
      description: 'Creative fashion and model photography',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageOptimizer
            src="/images/10.jpg"
            alt="Photography Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <ScrollReveal>
            <motion.span className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-400 text-sm mb-6">
              Professional Photography Service
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Capturing Life&apos;s{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Beautiful Moments
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Professional photography services for weddings, events, portraits, and more. Creating timeless memories through the lens.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookSession}
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
            {Array(8).fill(0).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer`}
                onClick={() => setSelectedImage(`/images/${index + 1}.jpg`)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <ImageOptimizer
                    src={`/images/${index + 1}.jpg`}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
<section className="py-20 bg-dark/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { value: "300+", label: "Albums Delivered" },
        { value: "500+", label: "Happy Clients" },
        { value: "8+", label: "Years Experience" },
      ].map((stat, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <div className="text-center w-full">
            <div className="text-4xl font-bold text-primary-400 mb-2">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        </ScrollReveal>
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
    </MainLayout>
  );
};

export default Photography;
