import React from 'react';
import BlurBackground from '../components/ui/BlurBackground';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="relative">
      <BlurBackground />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};