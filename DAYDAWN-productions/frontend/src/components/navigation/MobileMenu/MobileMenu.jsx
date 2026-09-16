import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button';
import './MobileMenu.css';

export const MobileMenu = ({
  isOpen,
  onClose,
  links = [],
  isAuthenticated,
  user,
  onLogout,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="mobile-drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-drawer__header">
          <div className="mobile-drawer__brand">
            <span className="mobile-drawer__wordmark">DAYDAWN</span>
            <span className="mobile-drawer__tag">PRODUCTIONS</span>
          </div>
          <button className="mobile-drawer__close" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="mobile-drawer__nav">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.path}
              className="mobile-drawer__link"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          {isAuthenticated ? (
            <div className="mobile-drawer__user-box">
              <p className="mobile-drawer__user-info">
                Signed in as <strong>{user?.name}</strong> ({user?.role})
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/login" onClick={onClose} className="mobile-drawer__portal-link">
              <Button variant="secondary" size="md" className="mobile-drawer__btn">
                Crew & Client Portal →
              </Button>
            </Link>
          )}

          <a href="/#contact" onClick={onClose} className="mobile-drawer__cta-wrap">
            <Button variant="primary" size="lg" className="mobile-drawer__btn">
              Work With Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
