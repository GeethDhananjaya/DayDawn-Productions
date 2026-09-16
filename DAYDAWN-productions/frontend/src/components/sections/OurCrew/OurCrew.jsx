import React from 'react';
import './OurCrew.css';

const CREW_MEMBERS = [
  {
    name: 'ELENA VANCE',
    role: 'HEAD OF DIRECTION',
    specialization: 'Narrative Storytelling & Actor Performance',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'KAELEN THORNE',
    role: 'DIRECTOR OF PHOTOGRAPHY',
    specialization: 'Large Format Cinematography & Natural Light',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'MAYA LINDQVIST',
    role: 'PRODUCTION DESIGNER',
    specialization: 'Atmospheric World Building & Set Architecture',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'JULIAN COLE',
    role: 'LEAD SOUND ARCHITECT',
    specialization: 'Location Acoustic Capture & Dolby Theatrical Mix',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
];

export const OurCrew = () => {
  return (
    <section className="our-crew" id="crew">
      <div className="container">
        {/* Section Header */}
        <div className="our-crew__header">
          <div>
            <span className="our-crew__eyebrow">THE TEAM ON SET</span>
            <h2 className="our-crew__title">OUR CREW.</h2>
          </div>
          <p className="our-crew__header-desc">
            We are the people behind the camera, the monitors, and the lighting rigs. Direct collaboration, deep technical proficiency, and authentic human chemistry.
          </p>
        </div>

        {/* Crew Grid */}
        <div className="our-crew__grid">
          {CREW_MEMBERS.map((member) => (
            <div key={member.name} className="crew-card">
              <div className="crew-card__media">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="crew-card__img"
                  loading="lazy"
                />
              </div>
              <div className="crew-card__info">
                <span className="crew-card__role">{member.role}</span>
                <h3 className="crew-card__name">{member.name}</h3>
                <p className="crew-card__spec">{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCrew;
