import React from 'react';
import { classNames } from '../../../utils';
import './Input.css';

export const Input = ({
  label,
  error,
  type = 'text',
  className = '',
  id,
  as = 'input',
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const Component = as;

  return (
    <div className={classNames('form-group', className)}>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <Component
        id={inputId}
        type={type}
        className={classNames('form-control', error && 'form-control--error')}
        {...props}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};
