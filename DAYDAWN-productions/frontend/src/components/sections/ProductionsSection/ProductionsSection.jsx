import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../common/SectionTitle';
import { Card } from '../../ui/Card';
import { ROUTES } from '../../../constants';
import './ProductionsSection.css';

const FEATURED_PRODUCTIONS = [
  {
    id: 'solaris-rising',
    title: 'Solaris Rising',
    category: 'Feature Film',
    year: 2025,
    director: 'Elena Vance',
  },
  {
    id: 'chronos-vanguard',
    title: 'Chronos Vanguard',
    category: 'Commercial',
    year: 2026,
    director: 'Marcus Thorne',
  },
  {
    id: 'the-last-echo',
    title: 'The Last Echo',
    category: 'Documentary',
    year: 2024,
    director: 'Julian Cole',
  },
];

export const ProductionsSection = ({ productions = FEATURED_PRODUCTIONS }) => {
  return (
    <section className="productions-section">
      <div className="container">
        <SectionTitle
          subtitle="SELECTED REEL"
          title="Featured Works"
          description="A curated look into our recent motion pictures, campaigns, and experimental productions."
        />

        <div className="productions-grid">
          {productions.map((prod) => (
            <Link
              key={prod.id}
              to={ROUTES.PRODUCTION_DETAILS.replace(':id', prod.id)}
              className="production-card-link"
            >
              <Card className="production-card">
                <div className="production-card__frame">
                  <span className="production-card__badge">{prod.category}</span>
                </div>
                <div className="production-card__info">
                  <h3 className="production-card__title">{prod.title}</h3>
                  <div className="production-card__meta">
                    <span>Dir. {prod.director}</span>
                    <span>•</span>
                    <span>{prod.year}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="productions-section__cta">
          <Link to={ROUTES.PRODUCTIONS} className="productions-section__all-link">
            Explore Full Filmography & Archive →
          </Link>
        </div>
      </div>
    </section>
  );
};
