import React from 'react';
import LogoSVG from './LogoSVG';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className="relative w-8 h-8">
        <LogoSVG />
<<<<<<< HEAD
=======
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" 
          style={{ mixBlendMode: 'overlay' }} 
        />
>>>>>>> 4c7f779645d73aa08ec4ef9a2b7e1962d1fdaec4
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

<<<<<<< HEAD
export default Logo;
=======
export default Logo;
>>>>>>> 4c7f779645d73aa08ec4ef9a2b7e1962d1fdaec4
