import React from 'react';
import SectionTitle from '../../ui/SectionTitle';
import PortfolioGrid from './PortfolioGrid';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Portfolio"
          description="A curated selection of our finest work capturing life's precious moments"
        />
        <div className="mt-12">
          <PortfolioGrid />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;