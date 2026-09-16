import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { Loading } from '../components/common/Loading';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { ROLES } from '../auth/rolePermissions';
import { ROUTES } from '../constants/routes';

// Lazy loaded views
const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/About'));
const ServicesPage = lazy(() => import('../pages/Services'));
const ProductionsPage = lazy(() => import('../pages/Productions'));
const ProductionDetailsPage = lazy(() => import('../pages/ProductionDetails'));
const ContactPage = lazy(() => import('../pages/Contact'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const LoginPage = lazy(() => import('../pages/Login'));

/**
 * Suspense wrapper for lazy-loaded routes
 */
const withSuspense = (Component) => (
  <Suspense fallback={<Loading fullScreen label="Loading Scene..." />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: 'about',
        element: withSuspense(AboutPage),
      },
      {
        path: 'services',
        element: withSuspense(ServicesPage),
      },
      {
        path: 'productions',
        element: withSuspense(ProductionsPage),
      },
      {
        path: 'productions/:id',
        element: withSuspense(ProductionDetailsPage),
      },
      {
        path: 'contact',
        element: withSuspense(ContactPage),
      },
      {
        path: 'login',
        element: withSuspense(LoginPage),
      },
      {
        path: 'portal',
        element: (
          <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.CREW, ROLES.CLIENT]}>
            <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{ fontFamily: 'var(--font-family-display)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                DAYDAWN PRODUCTION PORTAL
              </h1>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                Active protected crew and client area. Connected to user authentication foundation.
              </p>
              <a href="/" style={{ textDecoration: 'underline', color: 'var(--color-text-primary)' }}>
                Return to Public Website
              </a>
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: '404',
        element: withSuspense(NotFoundPage),
      },
      {
        path: '*',
        element: withSuspense(NotFoundPage),
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <div style={{ padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-family-display)', fontSize: '2rem', marginBottom: '1rem' }}>
              ADMINISTRATIVE DASHBOARD
            </h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Protected administrative area (Role: ADMIN only).
            </p>
          </div>
        ),
      },
    ],
  },
]);
