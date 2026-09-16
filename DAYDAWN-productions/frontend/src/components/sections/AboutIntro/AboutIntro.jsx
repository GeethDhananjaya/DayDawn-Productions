import React from 'react';
import './AboutIntro.css';

export const AboutIntro = () => {
  return (
    <section className="about-intro" id="about">
      <div className="container">
        <div className="about-intro__grid">
          {/* Left: Large Oswald Heading */}
          <div className="about-intro__left">
            <span className="about-intro__tag">OUR CREATIVE PHILOSOPHY</span>
            <h2 className="about-intro__heading">WE CREATE WITH PEOPLE.</h2>
          </div>

          {/* Right: Narrative Description & Supporting Information */}
          <div className="about-intro__right">
            <p className="about-intro__lead">
              DAYDAWN Productions is built on the belief that cinematic work isn’t just cameras and lenses—it is rooted in people, trust, creative collaboration, and authentic on-set culture.
            </p>
            <p className="about-intro__body">
              From commercial sets to long-form independent films, our crew works side-by-side with directors, agencies, and storytellers to transform ideas into memorable cinematic moments. We combine meticulous technical discipline with boundless human imagination.
            </p>

            <div className="about-intro__stats">
              <div className="about-intro__stat-item">
                <span className="about-intro__stat-num">100%</span>
                <span className="about-intro__stat-label">In-House Crew Mindset</span>
              </div>
              <div className="about-intro__stat-item">
                <span className="about-intro__stat-num">80+</span>
                <span className="about-intro__stat-label">Commercial & Film Sets</span>
              </div>
              <div className="about-intro__stat-item">
                <span className="about-intro__stat-num">01</span>
                <span className="about-intro__stat-label">Shared Vision: Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
