import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ImageOptimizer from '../ui/ImageOptimizer';

interface Photo {
  src: string;
  title: string;
  description: string;
  category: string;
}

const photos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
    title: "Wedding Moments",
    description: "Capturing the pure joy and emotion of wedding celebrations",
    category: "Wedding"
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    title: "Portrait Stories",
    description: "Professional portraits that reveal personality and character",
    category: "Portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1605628839258-c73be2942fa9?auto=format&fit=crop&q=80",
    title: "Studio Magic",
    description: "Controlled lighting and creative compositions",
    category: "Studio"
  },
  {
    src: "https://images.unsplash.com/photo-1533142266415-ac591a4e8144?auto=format&fit=crop&q=80",
    title: "Natural Light",
    description: "Using natural light to create stunning imagery",
    category: "Portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1537907690979-ee8e01276184?auto=format&fit=crop&q=80",
    title: "Wedding Details",
    description: "The small details that make weddings special",
    category: "Wedding"
  },
  {
    src: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80",
    title: "Creative Portraits",
    description: "Artistic and creative portrait photography",
    category: "Portrait"
  }
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (currentIndex === null) return;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === null) return null;
      const nextIndex = prevIndex + newDirection;
      if (nextIndex >= photos.length) return 0;
      if (nextIndex < 0) return photos.length - 1;
      return nextIndex;
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-[3/4] cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setCurrentIndex(index);
                setDirection(0);
              }}
            >
              <ImageOptimizer
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium">{photo.title}</h3>
                  <p className="text-white/70 text-sm">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Book View */}
        <AnimatePresence initial={false} custom={direction}>
          {currentIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-50 flex items-center justify-center"
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="relative w-full max-w-5xl aspect-[3/2] mx-4"
              >
                <ImageOptimizer
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].title}
                  className="w-full h-full object-contain rounded-lg"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark/90 to-transparent">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {photos[currentIndex].title}
                  </h2>
                  <p className="text-white/70">
                    {photos[currentIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              <button
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={() => setCurrentIndex(null)}
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotoGallery;