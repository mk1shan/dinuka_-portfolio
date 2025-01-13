import React from 'react';

const BlurBackground = () => {
  return (
    <div className="fixed inset-0 bg-dark">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90" />
      
      {/* Subtle color accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-primary-400/10 rounded-full blur-[120px]" />
      </div>
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          filter: 'contrast(320%) brightness(100%)',
        }}
      />
    </div>
  );
};

export default BlurBackground;