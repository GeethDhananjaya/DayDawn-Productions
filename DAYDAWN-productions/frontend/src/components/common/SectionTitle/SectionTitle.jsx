import React from 'react';
import { classNames } from '../../../utils';
import './SectionTitle.css';

export const SectionTitle = ({
  subtitle,
  title,
  description,
  alignment = 'center',
  className = '',
}) => {
  return (
    <div className={classNames('section-title', `section-title--${alignment}`, className)}>
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {description && <p className="section-title__description">{description}</p>}
    </div>
  );
};
