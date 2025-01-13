import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionBackground from '../ui/SectionBackground';

export const HomeContact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <SectionBackground variant="purple" intensity="strong" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle 
            title="Get in Touch"
            description="Let's discuss your next project and bring your vision to life"
          />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <ScrollReveal direction="left">
            <ContactInfo />
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};