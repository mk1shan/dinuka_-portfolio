import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import ScrollReveal from '../components/ui/ScrollReveal';
import ImageOptimizer from '../components/ui/ImageOptimizer';

const videos = [
  {
    id: 1,
    thumbnail: "/src/utils/301124389_385067860462905_5987993363866207152_n.jpg",
    title: "Wedding Cinematography",
    description: "Cinematic wedding films that tell your love story",
    category: "Wedding",
    aspectRatio: "aspect-video"
  },
  {
    id: 2,
    thumbnail: "/src/utils/320481185_454939970172460_6475389586188738174_n.jpg",
    title: "Corporate Events",
    description: "Professional video coverage for business events",
    category: "Corporate",
    aspectRatio: "aspect-video"
  },
  {
    id: 3,
    thumbnail: "/src/utils/440978260_759586609677693_7269011157693294492_n.jpg",
    title: "Music Videos",
    description: "Creative music video production",
    category: "Music",
    aspectRatio: "aspect-video"
  },
  {
    id: 4,
    thumbnail: "/src/utils/440939668_759586569677697_567122761302560316_n.jpg",
    title: "Documentary",
    description: "Storytelling through documentary filmmaking",
    category: "Documentary",
    aspectRatio: "aspect-video"
  },
  {
    id: 5,
    thumbnail: "/src/utils/408934490_719212857048402_1699656428436474519_n.jpg",
    title: "Commercial Production",
    description: "High-quality commercial video content",
    category: "Commercial",
    aspectRatio: "aspect-video"
  },
  {
    id: 6,
    thumbnail: "/src/utils/409011395_719212597048428_757872257017966201_n.jpg",
    title: "Event Highlights",
    description: "Capturing the essence of special events",
    category: "Event",
    aspectRatio: "aspect-video"
  }
];

const categories = ["All", "Wedding", "Corporate", "Music", "Documentary", "Commercial", "Event"];

const Videography = () => {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const handlePrevVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentVideoIndex - 1 + filteredVideos.length) % filteredVideos.length;
    setCurrentVideoIndex(newIndex);
    setSelectedVideo(filteredVideos[newIndex]);
  };

  const handleNextVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentVideoIndex + 1) % filteredVideos.length;
    setCurrentVideoIndex(newIndex);
    setSelectedVideo(filteredVideos[newIndex]);
  };

  return (
    <MainLayout>
      <div className="pt-24 pb-20">
        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 border-primary-500 text-white'
                    : 'border-white/10 text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <ScrollReveal key={video.id} delay={index * 0.1}>
                <motion.div
                  layoutId={`video-${video.id}`}
                  className={`group relative ${video.aspectRatio} cursor-pointer overflow-hidden rounded-2xl`}
                  onClick={() => {
                    setSelectedVideo(video);
                    setCurrentVideoIndex(index);
                  }}
                  whileHover="hover"
                >
                  {/* Thumbnail and overlay content */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  
                  <ImageOptimizer
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="w-16 h-16 bg-primary-500/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-400 text-sm font-medium mb-3 border border-primary-500/20">
                        {video.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {video.title}
                      </h3>
                      <p className="text-white/90 text-base leading-relaxed line-clamp-2 group-hover:line-clamp-none">
                        {video.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Video Preview Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 p-4 md:p-8 backdrop-blur-xl"
              onClick={() => setSelectedVideo(null)}
            >
              {/* Navigation and close buttons */}
              <div className="absolute top-4 right-4 z-50 flex space-x-4">
                <motion.button
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(null);
                  }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              <div className="h-full flex items-center justify-center">
                <motion.button
                  className="absolute left-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  onClick={handlePrevVideo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>

                <motion.div
                  layoutId={`video-${selectedVideo.id}`}
                  className="relative max-w-6xl w-full mx-auto aspect-video"
                >
                  <ImageOptimizer
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-primary-500/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Play className="w-10 h-10 text-white" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                    <span className="inline-block px-3 py-1 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-400 text-sm font-medium mb-3">
                      {selectedVideo.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-white/90 text-lg max-w-3xl">
                      {selectedVideo.description}
                    </p>
                  </div>
                </motion.div>

                <motion.button
                  className="absolute right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  onClick={handleNextVideo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
};

export default Videography;