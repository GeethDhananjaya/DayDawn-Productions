import React from 'react';
import { Button } from '../../common/Button';
import './CtaBanner.css';

export const CtaBanner = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-banner" id="contact">
      <div className="container cta-banner__container">
        <span className="cta-banner__tag">INITIATE COLLABORATION</span>
        <h2 className="cta-banner__heading">
          LET’S MAKE SOMETHING WORTH WATCHING.
        </h2>
        <p className="cta-banner__desc">
          Whether you have a commercial brief, a feature screenplay in development, or a creative concept needing execution, our producers and crew are ready.
        </p>
        <div className="cta-banner__actions">
          <Button
            variant="white"
            size="lg"
            onClick={() => handleScrollTo('contact-inquiry')}
          >
            START A PROJECT
          </Button>
          <Button
            variant="outline-white"
            size="lg"
            onClick={() => handleScrollTo('work')}
          >
            VIEW OUR WORK
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
