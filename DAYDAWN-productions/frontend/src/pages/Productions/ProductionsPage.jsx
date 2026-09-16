import React, { useState } from 'react';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import './Productions.css';

const ALL_PRODUCTIONS = [
  {
    id: 'solaris-rising',
    title: 'Solaris Rising',
    category: 'Feature Film',
    year: 2025,
    director: 'Elena Vance',
    synopsis: 'A cinematic sci-fi odyssey exploring solar frontiers and humanity’s endurance.',
  },
  {
    id: 'chronos-vanguard',
    title: 'Chronos Vanguard',
    category: 'Commercial',
    year: 2026,
    director: 'Marcus Thorne',
    synopsis: 'Luxury timepiece global commercial campaign shot on 65mm format.',
  },
  {
    id: 'the-last-echo',
    title: 'The Last Echo',
    category: 'Documentary',
    year: 2024,
    director: 'Julian Cole',
    synopsis: 'Deep ocean acoustic discovery uncovering silent marine migration paths.',
  },
  {
    id: 'neon-horizon',
    title: 'Neon Horizon',
    category: 'Music Video',
    year: 2025,
    director: 'Aria Sterling',
    synopsis: 'Hyper-stylized retro-futuristic narrative music video.',
  },
  {
    id: 'apex-velocity',
    title: 'Apex Velocity',
    category: 'Commercial',
    year: 2025,
    director: 'Marcus Thorne',
    synopsis: 'Automotive performance commercial filmed across Swiss mountain passes.',
  },
  {
    id: 'shadow-and-light',
    title: 'Shadow & Light',
    category: 'VFX & Post-Production',
    year: 2024,
    director: 'Elena Vance',
    synopsis: 'Experimental short exploring optical illusions and photorealistic CGI.',
  },
];

const CATEGORIES = ['All', 'Feature Film', 'Commercial', 'Documentary', 'Music Video', 'VFX & Post-Production'];

export const ProductionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProductions =
    selectedCategory === 'All'
      ? ALL_PRODUCTIONS
      : ALL_PRODUCTIONS.filter((p) => p.category === selectedCategory);

  return (
    <div className="productions-page">
      <div className="productions-page__hero">
        <div className="container">
          <SectionTitle
            subtitle="PORTFOLIO & ARCHIVE"
            title="Filmography & Showcases"
            description="Explore our narrative motion pictures, international brand campaigns, and visual craftsmanship."
          />

          <div className="productions-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'filter-btn--active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container productions-page__content">
        <div className="productions-page__grid">
          {filteredProductions.map((prod) => (
            <Link
              key={prod.id}
              to={ROUTES.PRODUCTION_DETAILS.replace(':id', prod.id)}
              className="production-link"
            >
              <Card className="production-grid-card">
                <div className="production-grid-card__visual">
                  <span className="production-grid-card__badge">{prod.category}</span>
                </div>
                <div className="production-grid-card__body">
                  <h3 className="production-grid-card__title">{prod.title}</h3>
                  <p className="production-grid-card__synopsis">{prod.synopsis}</p>
                  <div className="production-grid-card__meta">
                    <span>Director: {prod.director}</span>
                    <span>Year: {prod.year}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionsPage;
