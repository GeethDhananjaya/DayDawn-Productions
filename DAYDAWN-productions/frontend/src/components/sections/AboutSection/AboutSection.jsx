import React from 'react';
import { SectionTitle } from '../../common/SectionTitle';
import './AboutSection.css';

export const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <SectionTitle
            alignment="left"
            subtitle="OUR ORIGIN & ETHOS"
            title="Pioneering the Future of Visual Storytelling"
            description="Founded with a singular commitment to cinematic excellence, DAYDAWN Productions operates at the intersection of bold narrative instinct and state-of-the-art production technology."
          />
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat__num">120+</span>
              <span className="about-stat__label">Productions Completed</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">24</span>
              <span className="about-stat__label">Festival & Industry Awards</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">14</span>
              <span className="about-stat__label">Global Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
