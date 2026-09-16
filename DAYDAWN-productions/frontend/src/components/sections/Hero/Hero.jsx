import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button';
import { ROUTES } from '../../../constants';
import './Hero.css';

export const Hero = ({
  tagline = 'Cinematic Masterpieces. Commercial Impact.',
  title = 'DAYDAWN PRODUCTIONS',
  subtitle = 'A premier production company creating narrative films, premium commercials, and groundbreaking visual experiences for global audiences.',
}) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__overlay" />
      </div>
      <div className="container hero__content">
        <span className="hero__tagline">{tagline}</span>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className="hero__actions">
          <Link to={ROUTES.PRODUCTIONS}>
            <Button size="lg">Explore Portfolio</Button>
          </Link>
          <Link to={ROUTES.CONTACT}>
            <Button variant="outline" size="lg">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
