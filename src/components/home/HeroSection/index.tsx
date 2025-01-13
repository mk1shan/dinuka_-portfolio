import React from 'react';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      <HeroImage />
      <HeroContent />
    </section>
  );
};

export default HeroSection;