import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_LINKS, ROUTES } from '../../../constants';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand-col">
            <h3 className="footer__brand">{COMPANY_INFO.NAME}</h3>
            <p className="footer__tagline">{COMPANY_INFO.TAGLINE}</p>
            <p className="footer__info">{COMPANY_INFO.LOCATION}</p>
            <p className="footer__info">{COMPANY_INFO.EMAIL}</p>
          </div>

          <div className="footer__links-col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__legal-col">
            <h4 className="footer__col-title">Production Inquiries</h4>
            <p className="footer__inquiry-text">
              Accepting feature film, commercial, and streaming project bookings worldwide.
            </p>
            <Link to={ROUTES.CONTACT} className="footer__inquiry-btn">
              Initiate Project →
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.NAME}. All rights reserved.</p>
          <div className="footer__bottom-links">
            <span>Privacy Policy</span>
            <span>Terms of Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
