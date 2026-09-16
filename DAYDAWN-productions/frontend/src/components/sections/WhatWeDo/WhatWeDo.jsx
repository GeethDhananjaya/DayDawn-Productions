import React from 'react';
import './WhatWeDo.css';

const DISCIPLINES = [
  {
    number: '01',
    title: 'FILM',
    tagline: 'Narrative & Independent Cinema',
    description:
      'Long-form feature films, dramatic shorts, and festival cinema crafted with uncompromising cinematography, nuanced directing, and rich narrative texture.',
  },
  {
    number: '02',
    title: 'PHOTOGRAPHY',
    tagline: 'Editorial & Production Stills',
    description:
      'High-resolution commercial print campaigns, fashion editorials, on-set documentary stills, and atmospheric artist portraits.',
  },
  {
    number: '03',
    title: 'VIDEO PRODUCTION',
    tagline: 'High-Impact Moving Image',
    description:
      'Turnkey production pipelines from pre-production casting, location scouting, and camera packages to soundstage execution and lighting.',
  },
  {
    number: '04',
    title: 'EVENT PRODUCTION',
    tagline: 'Cinematic Live Capture',
    description:
      'Multi-camera live concert tapings, brand experiences, theatrical broadcasts, and documentary live captures with broadcast-grade switching.',
  },
  {
    number: '05',
    title: 'COMMERCIAL CONTENT',
    tagline: 'Brand Campaigns & Launches',
    description:
      'Dynamic visual advertising for global brands, luxury products, and lifestyle campaigns engineered to connect emotionally with audiences.',
  },
  {
    number: '06',
    title: 'CREATIVE PRODUCTION',
    tagline: 'Art Direction & Concept Lab',
    description:
      'Treatment development, visual moodboarding, production design, virtual production consultation, and creative supervision from concept to wrap.',
  },
];

export const WhatWeDo = () => {
  return (
    <section className="what-we-do" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="what-we-do__header">
          <div>
            <span className="what-we-do__eyebrow">PRODUCTION DISCIPLINES</span>
            <h2 className="what-we-do__title">WHAT WE DO.</h2>
          </div>
          <p className="what-we-do__header-desc">
            We operate across the entire production continuum, bringing technical depth, artistic instinct, and collaborative discipline to every frame.
          </p>
        </div>

        {/* Editorial Blocks Grid */}
        <div className="what-we-do__grid">
          {DISCIPLINES.map((item) => (
            <div key={item.title} className="discipline-block">
              <div className="discipline-block__top">
                <span className="discipline-block__num">{item.number}</span>
                <span className="discipline-block__tagline">{item.tagline}</span>
              </div>
              <h3 className="discipline-block__title">{item.title}</h3>
              <p className="discipline-block__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
