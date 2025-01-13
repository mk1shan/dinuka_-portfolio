import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 w-full pt-20">
        <HeroContent />
      </div>
    </section>
  );
};