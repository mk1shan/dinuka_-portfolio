import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Package {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface ServicePackagesProps {
  packages: Package[];
}

const ServicePackages = ({ packages }: ServicePackagesProps) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl border ${
                pkg.popular
                  ? 'bg-primary-900/20 border-primary-500/30'
                  : 'bg-white/[0.02] border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-4 px-4 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-gray-400 mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-white">{pkg.price}</div>
              </div>

              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-primary-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-8 py-3 px-6 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;