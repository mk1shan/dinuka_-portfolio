import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
        ${isActive 
          ? 'text-white bg-white/10 backdrop-blur-sm' 
          : 'text-white/70 hover:text-white hover:bg-white/5'
        }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;