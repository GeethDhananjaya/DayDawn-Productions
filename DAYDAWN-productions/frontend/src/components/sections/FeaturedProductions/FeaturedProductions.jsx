import React from 'react';
import { Link } from 'react-router-dom';
import heroProductionImage from '../../../assets/images/—Pngtree—group of people working on_15725416.jpg';
import './FeaturedProductions.css';

// Curated high-resolution, colourful, authentic production and cinema imagery
const PRODUCTIONS = [
  {
    id: 'chronicles-of-dawn',
    title: 'CHRONICLES OF DAWN',
    category: 'FEATURE FILM',
    year: '2025',
    image: heroProductionImage,
    aspect: 'wide',
  },
  {
    id: 'meridian-speed',
    title: 'MERIDIAN // ZERO POINT',
    category: 'COMMERCIAL CAMPAIGN',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    aspect: 'tall',
  },
  {
    id: 'silent-current',
    title: 'THE SILENT CURRENT',
    category: 'DOCUMENTARY',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    aspect: 'standard',
  },
  {
    id: 'neon-apogee',
    title: 'APOGEE IN VIOLET',
    category: 'MUSIC VIDEO',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80',
    aspect: 'standard',
  },
  {
    id: 'vanguard-optics',
    title: 'VANGUARD PRECISION',
    category: 'BRAND STORY',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
    aspect: 'tall',
  },
  {
    id: 'echoes-of-earth',
    title: 'ECHOES OF THE VALE',
    category: 'NARRATIVE SHORT',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
  },
];

export const FeaturedProductions = () => {
  return (
    <section className="featured-productions" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="featured-productions__header">
          <div>
            <span className="featured-productions__eyebrow">CURATED PORTFOLIO</span>
            <h2 className="featured-productions__title">FEATURED PRODUCTIONS.</h2>
          </div>
          <p className="featured-productions__header-desc">
            A selection of recent motion picture projects, national commercial campaigns, and visually ambitious stories produced by our team.
          </p>
        </div>

        {/* Editorial Masonry/Grid */}
        <div className="productions-editorial-grid">
          {PRODUCTIONS.map((item) => (
            <Link
              key={item.id}
              to={`/productions/${item.id}`}
              className={`production-item production-item--${item.aspect}`}
            >
              <div className="production-item__media">
                <img
                  src={item.image}
                  alt={`${item.title} production photography`}
                  className="production-item__img"
                  loading="lazy"
                />
                <div className="production-item__hover-overlay">
                  <span className="production-item__cta-label">VIEW PROJECT →</span>
                </div>
              </div>

              <div className="production-item__details">
                <div className="production-item__meta">
                  <span className="production-item__category">{item.category}</span>
                  <span className="production-item__year">{item.year}</span>
                </div>
                <h3 className="production-item__title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductions;
