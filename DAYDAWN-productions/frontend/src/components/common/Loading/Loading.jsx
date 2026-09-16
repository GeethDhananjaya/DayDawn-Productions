import React from 'react';
import './Loading.css';

export const Loading = ({ label = 'Loading...', fullScreen = false }) => {
  return (
    <div className={`loading-container ${fullScreen ? 'loading-container--fullscreen' : ''}`}>
      <div className="loading-spinner" />
      {label && <p className="loading-label">{label}</p>}
    </div>
  );
};
