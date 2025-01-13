import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/home/HeroSection';
import HomeAbout from '../components/home/HomeAbout';
import { HomeServices } from '../components/home/HomeServices';
import { HomeContact } from '../components/home/HomeContact';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HomeAbout />
      <HomeServices />
      <HomeContact />
    </MainLayout>
  );
};

export default HomePage;