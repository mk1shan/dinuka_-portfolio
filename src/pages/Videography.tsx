import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Film, Music, Camera, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ScrollReveal from '../components/ui/ScrollReveal';
import ImageOptimizer from '../components/ui/ImageOptimizer';

const Videography = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const handleContactClick = async () => {
    await navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const services = [
    {
      icon: Play,
      title: "Wedding Cinematography",
      description: "Cinematic wedding films that tell your love story.",
    },
    {
      icon: Film,
      title: "Corporate Videos",
      description: "Professional video coverage for business events.",
    },
    {
      icon: Music,
      title: "Music Video Production",
      description: "Creative and artistic music video creation.",
    },
    {
      icon: Camera,
      title: "Event Highlights",
      description: "Capturing the essence of special moments.",
    },
  ];

  const portfolioVideos = [
    { src: '/videos/wedding1.jpg', category: 'Wedding', span: 'col-span-2 row-span-2' },
    { src: '/videos/corporate1.jpg', category: 'Corporate', span: 'col-span-1 row-span-1' },
    { src: '/videos/music1.jpg', category: 'Music', span: 'col-span-1 row-span-1' },
    { src: '/videos/event1.jpg', category: 'Event', span: 'col-span-1 row-span-2' },
    { src: '/videos/wedding2.jpg', category: 'Wedding', span: 'col-span-2 row-span-1' },
  ];

  const handlePrevVideo = (e) => {
    e.stopPropagation();
    const newIndex = (currentVideoIndex - 1 + portfolioVideos.length) % portfolioVideos.length;
    setCurrentVideoIndex(newIndex);
    setSelectedVideo(portfolioVideos[newIndex]);
  };

  const handleNextVideo = (e) => {
    e.stopPropagation();
    const newIndex = (currentVideoIndex + 1) % portfolioVideos.length;
    setCurrentVideoIndex(newIndex);
    setSelectedVideo(portfolioVideos[newIndex]);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/videos/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <ScrollReveal>
            <motion.span className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-400 text-sm mb-6">
              Professional Videography Services
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Turning Moments into{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Cinematic Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Experience professional videography for weddings, events, and more. Your story, told through our lens.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              Get Started
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
                  className="p-6 h-[250px] flex flex-col justify-between bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div>
                    <service.icon className="w-8 h-8 text-primary-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    

      {/* Stats Section */}
      {/* Stats Section */}
<section className="py-20 bg-dark/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { value: "1,000+", label: "Videos Delivered" },
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-8">Let Us Tell Your Story</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              Contact Us Today
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 p-4 md:p-8 flex items-center justify-center"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.video
              src={selectedVideo.src}
              controls
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

export default Videography;
