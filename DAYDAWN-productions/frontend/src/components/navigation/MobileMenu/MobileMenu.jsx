import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.css';

export const MobileMenu = ({ isOpen, onClose, links = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu__header">
          <span className="mobile-menu__title">MENU</span>
          <button className="mobile-menu__close" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>
        <div className="mobile-menu__links">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
              }
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
