import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/icons/daydawn_logo_transparent.png';
import { ROUTES } from '../../../constants';
import './Logo.css';

/**
 * Reusable DAYDAWN Productions Brand Logo component
 * Automatically adapts between light and dark backgrounds
 * 
 * @param {Object} props
 * @param {'default' | 'light' | 'dark' | 'auto'} [props.theme='auto']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.linked=true]
 * @param {string} [props.className='']
 */
export const Logo = ({
  theme = 'auto',
  size = 'md',
  linked = true,
  className = '',
}) => {
  const content = (
    <div className={`brand-logo brand-logo--${size} brand-logo--theme-${theme} ${className}`}>
      <img
        src={logoImg}
        alt="DAYDAWN CREW Productions Logo"
        className="brand-logo__img"
      />
    </div>
  );

  if (linked) {
    return (
      <Link to={ROUTES.HOME} className="brand-logo__link" aria-label="DAYDAWN Productions Home">
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
