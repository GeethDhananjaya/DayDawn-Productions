import React from 'react';
import { Hero } from '../../components/sections/Hero';
import { ServicesSection } from '../../components/sections/ServicesSection';
import { ProductionsSection } from '../../components/sections/ProductionsSection';
import { AboutSection } from '../../components/sections/AboutSection';
import { ContactSection } from '../../components/sections/ContactSection';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <ProductionsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
