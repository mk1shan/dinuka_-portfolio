import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/ui/Footer';
import BlurBackground from '../components/ui/BlurBackground';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <BlurBackground />
      <Navbar />
      <main className="flex-grow relative">
        <div className="pt-20">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;