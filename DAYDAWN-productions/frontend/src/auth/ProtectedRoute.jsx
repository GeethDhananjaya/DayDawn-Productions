import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Loading } from '../components/common/Loading';

/**
 * Route Guard protecting restricted application views
 * @param {Object} props
 * @param {string[]} [props.allowedRoles] - Optional list of allowed roles
 * @param {React.ReactNode} props.children
 */
export const ProtectedRoute = ({ allowedRoles = [], children }) => {
  const { isAuthenticated, role, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Loading fullScreen label="Verifying Crew Credentials..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return (
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <h2 style={{ fontFamily: 'var(--font-family-display)', fontSize: '2rem', marginBottom: '1rem' }}>
          Restricted Production Area
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '480px', marginBottom: '1.5rem' }}>
          Your current session role (<strong>{role}</strong>) does not have access permissions for this department.
        </p>
        <a href="/" style={{ textDecoration: 'underline', color: 'var(--color-text-primary)' }}>
          Return to Stage
        </a>
      </div>
    );
  }

  return children;
};
