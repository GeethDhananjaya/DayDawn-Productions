import React from 'react';
import './ErrorMessage.css';

export const ErrorMessage = ({ message, onRetry }) => {
  if (!message) return null;

  return (
    <div className="error-message" role="alert">
      <div className="error-message__content">
        <span className="error-message__icon">!</span>
        <p className="error-message__text">{message}</p>
      </div>
      {onRetry && (
        <button className="error-message__retry" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};
