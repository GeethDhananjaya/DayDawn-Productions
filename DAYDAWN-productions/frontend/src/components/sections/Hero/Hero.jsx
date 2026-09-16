import React from 'react';
import { Button } from '../../common/Button';
import heroBgImage from '../../../assets/images/—Pngtree—group of people working on_15725416.jpg';
import './Hero.css';

export const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Background layer with subtle blur and slight scale */}
      <div
        className="hero__bg-layer"
        style={{ backgroundImage: `url(${heroBgImage})` }}
        aria-hidden="true"
      />

      {/* Subtle dark translucent overlay to ensure readable foreground typography */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Crisp foreground content layer */}
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">DAYDAWN PRODUCTIONS</span>
          <h1 className="hero__title">
            <span>CREATE.</span>
            <span>CAPTURE.</span>
            <span className="hero__title-accent">CREATE AGAIN.</span>
          </h1>
          <p className="hero__description">
            Stories shaped by people, places and moments. A collaborative production crew bringing cinematic vision and authentic human energy to narrative film, high-impact commercials, and visual storytelling.
          </p>
          <div className="hero__actions">
            <Button
              variant="white"
              size="lg"
              onClick={() => handleScrollTo('work')}
            >
              VIEW OUR WORK
            </Button>
            <Button
              variant="outline-white"
              size="lg"
              onClick={() => handleScrollTo('crew')}
            >
              MEET THE CREW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
