import React from 'react';
import LogoSVG from './LogoSVG';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className="relative w-8 h-8">
        <LogoSVG />
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-base font-bold text-white leading-tight tracking-wide">
          DINUKA
        </span>
        <span className="text-base font-bold text-white leading-tight tracking-wide">
          VIDUSHAN
        </span>
        <span className="text-[0.6rem] text-purple-400 font-medium tracking-wider">
          CREATIONS
        </span>
      </div>
    </div>
  );
};

export default Logo;
