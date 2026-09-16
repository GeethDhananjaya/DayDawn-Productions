import React from 'react';
import { classNames } from '../../../utils';
import './Card.css';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'card',
        hoverEffect && 'card--hoverable',
        onClick && 'card--clickable',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
