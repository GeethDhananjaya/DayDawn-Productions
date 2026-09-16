import React from 'react';
import { SectionTitle } from '../../components/common/SectionTitle';
import { AboutSection } from '../../components/sections/AboutSection';
import './About.css';

export const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page__hero">
        <div className="container">
          <SectionTitle
            subtitle="WHO WE ARE"
            title="DAYDAWN PRODUCTIONS"
            description="A high-end cinematic production house built by directors, cinematographers, and visual artists."
          />
        </div>
      </div>
      <AboutSection />
      <div className="container about-page__details">
        <div className="about-page__grid">
          <div className="about-page__card">
            <h3>Cinematic Integrity</h3>
            <p>We refuse ordinary visual solutions. Every frame is planned, lighted, and crafted to evoke emotion and resonance.</p>
          </div>
          <div className="about-page__card">
            <h3>Global Execution</h3>
            <p>From drone units in Iceland to studio soundstages in Los Angeles, our crews deliver scale without compromise.</p>
          </div>
          <div className="about-page__card">
            <h3>Technical Innovation</h3>
            <p>Equipped with state-of-the-art camera systems, virtual production LED stages, and cutting-edge post pipelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
