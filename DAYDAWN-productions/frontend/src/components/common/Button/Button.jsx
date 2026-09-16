import React from 'react';
import { classNames } from '../../../utils';
import './Button.css';

/**
 * Reusable Button component
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.isLoading=false]
 * @param {boolean} [props.disabled=false]
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={classNames('btn', `btn--${variant}`, `btn--${size}`, className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="btn__spinner" /> : null}
      <span className={isLoading ? 'btn__text--hidden' : 'btn__text'}>{children}</span>
    </button>
  );
};
