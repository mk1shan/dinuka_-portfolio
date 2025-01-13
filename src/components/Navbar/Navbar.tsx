import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleSectionClick = (section: string) => async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      await navigate('/');
      setTimeout(() => {
        const targetSection = document.getElementById(section);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/20 backdrop-blur-sm border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>

            <div className="hidden md:flex items-center justify-center flex-grow">
              <div className="flex items-center space-x-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/photography">Photography</NavLink>
                <NavLink to="/videography">Videography</NavLink>
                {['services', 'contact'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={handleSectionClick(item)}
                    className="relative group px-8 py-2"
                    whileHover="hover"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      variants={{
                        hover: {
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }
                      }}
                    />
                    <motion.span
                      className="relative z-10 text-base font-medium capitalize text-white/80 group-hover:text-white transition-colors duration-300"
                      variants={{
                        hover: {
                          y: -1,
                          transition: { duration: 0.3 }
                        }
                      }}
                    >
                      {item}
                    </motion.span>
                    <motion.div
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary-500/50 w-0 group-hover:w-1/2 transition-all duration-300"
                      variants={{
                        hover: {
                          width: '50%',
                          transition: { duration: 0.3 }
                        }
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="md:hidden flex items-center justify-end flex-grow">
              <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group p-2"
              >
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Menu className="relative z-10 w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
              </motion.button>
            </div>
          </div>
        </nav>

        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent" />
      </div>

      <AnimatePresence mode="wait">
        {isOpen && <MobileMenu key="mobile-menu" isOpen={isOpen} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
