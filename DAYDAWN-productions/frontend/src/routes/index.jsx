import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { Loading } from '../components/common/Loading';
import { ROUTES } from '../constants/routes';

// Lazy loaded page components for optimal production bundle splitting
const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/About'));
const ServicesPage = lazy(() => import('../pages/Services'));
const ProductionsPage = lazy(() => import('../pages/Productions'));
const ProductionDetailsPage = lazy(() => import('../pages/ProductionDetails'));
const ContactPage = lazy(() => import('../pages/Contact'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

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
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <div><h2>Admin Portal Placeholder</h2><p>Ready for secure CMS integration.</p></div>,
      },
    ],
  },
]);
