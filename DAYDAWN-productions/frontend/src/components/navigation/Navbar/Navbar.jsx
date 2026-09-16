import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, ROUTES } from '../../../constants';
import { MobileMenu } from '../MobileMenu';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to={ROUTES.HOME} className="navbar__brand">
          <span className="navbar__brand-main">DAYDAWN</span>
          <span className="navbar__brand-sub">PRODUCTIONS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar__toggle"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
          aria-expanded={isMobileOpen}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        {/* Mobile Navigation Drawer */}
        <MobileMenu
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          links={NAV_LINKS}
        />
      </div>
    </nav>
  );
};
