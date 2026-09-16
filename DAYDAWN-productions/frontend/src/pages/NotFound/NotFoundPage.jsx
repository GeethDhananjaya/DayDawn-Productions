import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { ROUTES } from '../../constants';
import './NotFound.css';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Scene Not Found</h1>
        <p className="not-found-desc">
          The frame or project reel you requested does not exist or may have been relocated in the editing room.
        </p>
        <Link to={ROUTES.HOME}>
          <Button size="md">Return to Main Stage</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
