import React from 'react';
import { classNames } from '../../../utils';
import './PageContainer.css';

export const PageContainer = ({ children, className = '', withHeaderPadding = true }) => {
  return (
    <main
      className={classNames(
        'page-container',
        withHeaderPadding && 'page-container--header-padding',
        className
      )}
    >
      {children}
    </main>
  );
};
