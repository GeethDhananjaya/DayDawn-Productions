import React from 'react';
import crewWorkingImage from '../../../assets/images/—Pngtree—group of people working on_15725416.jpg';
import './BehindTheScenes.css';

const BTS_PHOTOS = [
  {
    id: 'bts-1',
    title: 'Camera Department Setup - Studio Stage 3',
    caption: 'Fine tuning the 65mm focal distance before the tracking shot.',
    image: crewWorkingImage,
    span: 'featured',
  },
  {
    id: 'bts-2',
    title: 'Monitor Playback Review',
    caption: 'Director and lead actor analyzing take continuity.',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
    span: 'regular',
  },
  {
    id: 'bts-3',
    title: 'High Key Lighting Rig',
    caption: 'Gaffer and grip crew shaping soft ambient fill.',
    image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=800&q=80',
    span: 'regular',
  },
  {
    id: 'bts-4',
    title: 'Exterior Dawn Rigging',
    caption: 'Pre-dawn location camera prep on the ridge.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    span: 'regular',
  },
  {
    id: 'bts-5',
    title: 'Sound & Boom Coordination',
    caption: 'Multi-channel wireless boom tracking across dynamic blocking.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    span: 'regular',
  },
];

export const BehindTheScenes = () => {
  return (
    <section className="bts-section" id="bts">
      <div className="container">
        {/* Header */}
        <div className="bts-section__header">
          <div>
            <span className="bts-section__eyebrow">PRODUCTION IN MOTION</span>
            <h2 className="bts-section__title">BEHIND THE SCENES.</h2>
          </div>
          <p className="bts-section__header-desc">
            The authentic, colourful life of our production crew on set. Real humans, high energy, and shared dedication to the craft.
          </p>
        </div>

        {/* Gallery Grid - Authentic and vibrant, zero grayscale */}
        <div className="bts-grid">
          {BTS_PHOTOS.map((item) => (
            <div key={item.id} className={`bts-card bts-card--${item.span}`}>
              <div className="bts-card__media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="bts-card__img"
                  loading="lazy"
                />
              </div>
              <div className="bts-card__caption">
                <h4 className="bts-card__title">{item.title}</h4>
                <p className="bts-card__text">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
