import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SOCIAL_LINKS, ROUTES } from '../../../constants';
import { Logo } from '../../common/Logo';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          {/* Brand Column */}
          <div className="site-footer__brand-col">
            <Logo size="lg" theme="light" className="site-footer__logo" />
            <p className="site-footer__tagline">{COMPANY_INFO.TAGLINE}</p>
            <p className="site-footer__detail">{COMPANY_INFO.LOCATION}</p>
            <p className="site-footer__detail">{COMPANY_INFO.EMAIL}</p>
            <p className="site-footer__detail">{COMPANY_INFO.PHONE}</p>
          </div>

          {/* Navigation Column */}
          <div className="site-footer__nav-col">
            <h4 className="site-footer__heading">NAVIGATION</h4>
            <ul className="site-footer__list">
              <li><a href="/#hero">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#work">Productions</a></li>
              <li><a href="/#crew">Our Crew</a></li>
              <li><a href="/#bts">Behind The Scenes</a></li>
            </ul>
          </div>

          {/* Connect & Portal Column */}
          <div className="site-footer__nav-col">
            <h4 className="site-footer__heading">PORTAL & ACCESS</h4>
            <ul className="site-footer__list">
              <li><Link to="/login">Crew & Client Login</Link></li>
              <li><a href="/#contact">Project Inquiries</a></li>
              <li><a href="/#services">Production Capabilities</a></li>
            </ul>
          </div>

          {/* Social Channels Column */}
          <div className="site-footer__social-col">
            <h4 className="site-footer__heading">CHANNELS</h4>
            <ul className="site-footer__list">
              {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.NAME}. All rights reserved.</p>
          <div className="site-footer__legal">
            <span>Light + Minimal + Cinematic + Human</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
