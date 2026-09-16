import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import { useAuth } from '../../../auth';
import { MobileMenu } from '../MobileMenu';
import './Navbar.css';

export const NAVBAR_ITEMS = [
  { label: 'HOME', path: '/#hero', id: 'hero' },
  { label: 'ABOUT', path: '/#about', id: 'about' },
  { label: 'SERVICES', path: '/#services', id: 'services' },
  { label: 'PRODUCTIONS', path: '/#work', id: 'work' },
  { label: 'CREW', path: '/#crew', id: 'crew' },
  { label: 'CONTACT', path: '/#contact', id: 'contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Transition from transparent hero state to solid light navbar after 60px
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    if (isHomePage && item.id) {
      e.preventDefault();
      const targetElement = document.getElementById(item.id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Determine if navbar is in translucent inverted hero mode or solid light mode
  const isHeroState = isHomePage && !isScrolled;

  return (
    <nav className={`navbar ${isHeroState ? 'navbar--hero-state' : 'navbar--scrolled'}`}>
      <div className="navbar__container">
        {/* Brand Logo */}
        <Link to={ROUTES.HOME} className="navbar__brand">
          <span className="navbar__brand-wordmark">DAYDAWN</span>
          <span className="navbar__brand-tag">PRODUCTIONS</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar__nav-list">
          {NAVBAR_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="navbar__nav-link"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Work With Us + Portal */}
        <div className="navbar__actions">
          {isAuthenticated ? (
            <div className="navbar__user-chip">
              <span className="navbar__user-name">{user?.name}</span>
              <button onClick={logout} className="navbar__logout-btn" title="Sign Out">
                LOGOUT
              </button>
            </div>
          ) : (
            <Link to="/login" className="navbar__login-link">
              PORTAL
            </Link>
          )}

          <a href="/#contact" className="navbar__cta-btn">
            WORK WITH US
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="navbar__hamburger"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open Navigation Menu"
            aria-expanded={isMobileOpen}
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileMenu
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          links={NAVBAR_ITEMS}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={logout}
        />
      </div>
    </nav>
  );
};
