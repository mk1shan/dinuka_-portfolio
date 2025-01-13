import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = async (section: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      await navigate("/");
    }
    setTimeout(() => {
      const target = document.getElementById(section);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <div
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/20 backdrop-blur-sm border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/photography">Photography</NavLink>
              <NavLink to="/videography">Videography</NavLink>
              <button
                onClick={() => handleSectionClick("services")}
                className="text-white/80 hover:text-white transition"
              >
                Services
              </button>
              <button
                onClick={() => handleSectionClick("contact")}
                className="text-white/80 hover:text-white transition"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/80 hover:text-white transition"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-3/4 bg-black/90 z-50 flex flex-col items-center justify-center space-y-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Mobile Navigation Links */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/photography"
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium"
            >
              Photography
            </Link>
            <Link
              to="/videography"
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium"
            >
              Videography
            </Link>
            <button
              onClick={() => handleSectionClick("services")}
              className="text-white text-lg font-medium"
            >
              Services
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="text-white text-lg font-medium"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
