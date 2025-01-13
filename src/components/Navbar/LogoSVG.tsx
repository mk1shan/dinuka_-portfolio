import React from 'react';

const LogoSVG = () => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      className="w-10 h-10 text-white"
      fill="currentColor"
    >
      <path d="M200 150h600v200h-100v350h-150V350h-100v350h-150V350h-100V150zm0 600h600v100H200V750z" />
      <text
        x="500"
        y="950"
        textAnchor="middle"
        className="text-xs font-bold"
        fill="currentColor"
      >
        CREATIONS
      </text>
    </svg>
  );
};

export default LogoSVG;