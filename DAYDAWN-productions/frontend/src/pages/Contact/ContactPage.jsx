import React from 'react';
import { ContactSection } from '../../components/sections/ContactSection';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../constants';
import './Contact.css';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-page__hero">
        <div className="container">
          <span className="contact-page__subtitle">CONNECT WITH US</span>
          <h1 className="contact-page__title">Production Inquiries & Studio Booking</h1>
          <p className="contact-page__desc">
            Let’s discuss your next production, feature film, or commercial broadcast.
          </p>
        </div>
      </div>

      <ContactSection />

      <div className="container contact-info-grid">
        <div className="contact-info-card">
          <h3>Direct Communications</h3>
          <p><strong>Email:</strong> {COMPANY_INFO.EMAIL}</p>
          <p><strong>Phone:</strong> {COMPANY_INFO.PHONE}</p>
          <p><strong>Hours:</strong> Mon - Fri: 09:00 - 18:00 PST</p>
        </div>

        <div className="contact-info-card">
          <h3>Studio Headquarters</h3>
          <p>{COMPANY_INFO.LOCATION}</p>
          <p className="text-muted">Soundstages, production offices, and DI suites.</p>
        </div>

        <div className="contact-info-card">
          <h3>Social & Channels</h3>
          <ul className="social-links-list">
            {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name.charAt(0) + name.slice(1).toLowerCase()} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
