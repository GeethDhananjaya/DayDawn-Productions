import React from 'react';
import { SectionTitle } from '../../common/SectionTitle';
import { Card } from '../../ui/Card';
import './ServicesSection.css';

const DEFAULT_SERVICES = [
  {
    id: 'film-production',
    title: 'Feature & Narrative Film',
    desc: 'End-to-end production for narrative features, short films, and streaming cinema.',
  },
  {
    id: 'commercial',
    title: 'High-Impact Commercials',
    desc: 'Visually arresting brand campaigns, product launches, and broadcast commercials.',
  },
  {
    id: 'post-vfx',
    title: 'Post-Production & VFX',
    desc: 'World-class editorial, color grading, CGI compositing, and Dolby Atmos audio mastering.',
  },
];

export const ServicesSection = ({ services = DEFAULT_SERVICES }) => {
  return (
    <section className="services-section">
      <div className="container">
        <SectionTitle
          subtitle="WHAT WE DELIVER"
          title="Full-Spectrum Production Craft"
          description="From script development to final master delivery, our teams blend technical innovation with artistic vision."
        />
        <div className="services-grid">
          {services.map((service) => (
            <Card key={service.id} className="service-card">
              <span className="service-card__badge">0{services.indexOf(service) + 1}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
