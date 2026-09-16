import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { ImageGallery } from '../../components/ui/ImageGallery';
import { ROUTES } from '../../constants';
import './ProductionDetails.css';

export const ProductionDetailsPage = () => {
  const { id } = useParams();

  const mockDetails = {
    id: id || 'project-showcase',
    title: id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Solaris Rising',
    category: 'Feature Film',
    year: 2025,
    director: 'Elena Vance',
    cinematographer: 'Kaelen Thorne, ASC',
    format: 'ARRI Alexa 65 / Panavision Spherical',
    synopsis:
      'A deep space geological expedition on a dying star discovers strange energetic anomalies that challenge scientific understanding and force the crew into a desperate fight for survival and revelation.',
    deliverables: ['Theatrical DCP 4K', 'Dolby Atmos Master', 'HDR10+ & Dolby Vision Master'],
    gallery: [
      { id: '1', title: 'Main Frame - The Orbital Station', category: 'Key Still' },
      { id: '2', title: 'Onset Lighting Setup - Soundstage 4', category: 'Behind The Scenes' },
      { id: '3', title: 'Optical VFX Composition Pass', category: 'Post Production' },
    ],
  };

  return (
    <div className="production-details-page">
      <div className="production-details-page__hero">
        <div className="container">
          <Link to={ROUTES.PRODUCTIONS} className="back-link">
            ← Back to All Productions
          </Link>
          <span className="production-details__tag">{mockDetails.category}</span>
          <h1 className="production-details__title">{mockDetails.title}</h1>
          <div className="production-details__meta">
            <span>Year: {mockDetails.year}</span>
            <span>Director: {mockDetails.director}</span>
            <span>Cinematography: {mockDetails.cinematographer}</span>
          </div>
        </div>
      </div>

      <div className="container production-details-page__content">
        <div className="production-details__layout">
          <div className="production-details__main">
            <section className="details-section">
              <h2>Project Synopsis</h2>
              <p>{mockDetails.synopsis}</p>
            </section>

            <section className="details-section">
              <h2>Production Gallery & Behind the Scenes</h2>
              <ImageGallery items={mockDetails.gallery} />
            </section>
          </div>

          <aside className="production-details__sidebar">
            <div className="details-card">
              <h3>Technical Specifications</h3>
              <ul className="details-spec-list">
                <li>
                  <span className="spec-label">Camera Format:</span>
                  <span className="spec-value">{mockDetails.format}</span>
                </li>
                <li>
                  <span className="spec-label">Aspect Ratio:</span>
                  <span className="spec-value">2.39:1 Anamorphic</span>
                </li>
                <li>
                  <span className="spec-label">Color Pipeline:</span>
                  <span className="spec-value">ACEScc / DaVinci Resolve</span>
                </li>
              </ul>
            </div>

            <div className="details-card details-card--cta">
              <h3>Need a Similar Production?</h3>
              <p>Discuss concepts, timelines, and technical requirements with our producers.</p>
              <Link to={ROUTES.CONTACT}>
                <Button variant="primary" size="md">
                  Inquire Now
                </Button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProductionDetailsPage;
