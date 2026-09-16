/**
 * Centralized Route Paths for DAYDAWN Productions
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PRODUCTIONS: '/productions',
  PRODUCTION_DETAILS: '/productions/:id',
  CONTACT: '/contact',
  ADMIN: '/admin',
  NOT_FOUND: '*',
};

export const NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Services', path: ROUTES.SERVICES },
  { label: 'Productions', path: ROUTES.PRODUCTIONS },
  { label: 'Contact', path: ROUTES.CONTACT },
];
