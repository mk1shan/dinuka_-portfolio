import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
