import React from 'react';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ServicesSection } from '../../components/sections/ServicesSection';
import { ContactSection } from '../../components/sections/ContactSection';
import './Services.css';

const EXTENDED_SERVICES = [
  {
    id: 'narrative-film',
    title: 'Feature Films & Narrative Cinema',
    desc: 'Complete production pipeline including casting, location management, cinematography, lighting design, and onset supervision.',
  },
  {
    id: 'commercials',
    title: 'Commercials & Brand Storytelling',
    desc: 'High-production-value commercials tailored for cinema distribution, broadcast television, and digital streaming campaigns.',
  },
  {
    id: 'documentaries',
    title: 'Documentary & Investigative Series',
    desc: 'Impactful documentary production with international logistics, field recording, and cinematic drone capabilities.',
  },
  {
    id: 'music-videos',
    title: 'Music Videos & Creative Art Pieces',
    desc: 'Avant-garde visual direction for globally renowned musical artists and labels.',
  },
  {
    id: 'vfx-post',
    title: 'VFX, CGI & Color Grading',
    desc: 'High-end visual effects compositing, 3D world creation, DaVinci Resolve color grading, and ACES workflow management.',
  },
  {
    id: 'sound-design',
    title: 'Dolby Atmos Sound Design & Scoring',
    desc: 'Immersive soundscapes, original orchestral scoring, ADR, and final acoustic theatrical mixdown.',
  },
];

export const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-page__hero">
        <div className="container">
          <SectionTitle
            subtitle="END-TO-END CAPABILITIES"
            title="Production Services"
            description="Our multidisciplinary studio provides comprehensive production infrastructure for films, agencies, and global brands."
          />
        </div>
      </div>
      <ServicesSection services={EXTENDED_SERVICES} />
      <ContactSection />
    </div>
  );
};

export default ServicesPage;
