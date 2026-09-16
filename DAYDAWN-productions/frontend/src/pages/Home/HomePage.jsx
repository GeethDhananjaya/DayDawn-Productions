import React from 'react';
import { Hero } from '../../components/sections/Hero';
import { AboutIntro } from '../../components/sections/AboutIntro';
import { WhatWeDo } from '../../components/sections/WhatWeDo';
import { FeaturedProductions } from '../../components/sections/FeaturedProductions';
import { OurCrew } from '../../components/sections/OurCrew';
import { BehindTheScenes } from '../../components/sections/BehindTheScenes';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { ContactSection } from '../../components/sections/ContactSection';

export const HomePage = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section (with blurred background image layer & sharp typography) */}
      <Hero />

      {/* 2. About / Introduction ("WE CREATE WITH PEOPLE.") */}
      <AboutIntro />

      {/* 3. What We Do (Editorial Discipline Blocks) */}
      <WhatWeDo />

      {/* 4. Featured Productions (Colourful, High-Impact Editorial Grid) */}
      <FeaturedProductions />

      {/* 5. Our Crew ("We are people behind the work.") */}
      <OurCrew />

      {/* 6. Behind The Scenes (Authentic, Vibrant On-Set Life) */}
      <BehindTheScenes />

      {/* 7. Call To Action ("LET'S MAKE SOMETHING WORTH WATCHING.") */}
      <CtaBanner />

      {/* 8. Production Inquiry Submission Form */}
      <div id="contact-inquiry">
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;
