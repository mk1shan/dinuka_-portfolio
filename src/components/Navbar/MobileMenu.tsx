import React from 'react';
import { X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollToSection } from '../../hooks/useScrollToSection';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  const handleSectionClick = (section: string) => {
    navigate('/', { state: { scrollTo: section } });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed right-0 top-0 w-64 h-full bg-dark/95 backdrop-blur-md border-l border-white/10 p-6 z-50"
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              <Link
                to="/photography"
                onClick={onClose}
                className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Photography
              </Link>
              <Link
                to="/videography"
                onClick={onClose}
                className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Videography
              </Link>
              <button
                onClick={() => handleSectionClick('about')}
                className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => handleSectionClick('services')}
                className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleSectionClick('contact')}
                className="mt-4 w-full px-4 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white rounded-lg transition-all duration-300"
              >
                Contact us
              </button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;