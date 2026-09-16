# DAYDAWN Productions - Frontend SPA

Modern, high-performance React 18 single-page application built with Vite and pure modular CSS.

---

## 1. Directory Structure
- `public/`: Static unbundled assets (favicons, fonts, robots.txt).
- `src/assets/`: Bundled media (logos, icons, images).
- `src/components/`:
  - `common/`: Primitive reusable UI components (`Button`, `Loading`, `ErrorMessage`, `SectionTitle`).
  - `layout/`: Persistent structural shells (`Header`, `Footer`, `PageContainer`).
  - `navigation/`: Main navigation bars, sticky headers, and responsive mobile drawers (`Navbar`, `MobileMenu`).
  - `sections/`: High-level landing sections (`Hero`, `ServicesSection`, `ProductionsSection`, `AboutSection`, `ContactSection`).
  - `ui/`: Interactive UI widgets (`Modal`, `Card`, `Input`, `ImageGallery`).
- `src/pages/`: Route targets (`Home`, `About`, `Services`, `Productions`, `ProductionDetails`, `Contact`, `NotFound`).
- `src/layouts/`: Route frames (`MainLayout`, `AdminLayout`).
- `src/routes/`: Route definitions and code-split suspense boundaries.
- `src/services/`: API abstractions separating views from network transport.
- `src/api/`: Base HTTP fetch client with timeout and error wrapping.
- `src/config/`: Runtime environment validation.
- `src/constants/`: Routing, metadata, and company information constants.
- `src/hooks/`: Custom state and lifecycle hooks.
- `src/styles/`: Design tokens, reset, and base styling.

---

## 2. Scripts
- `npm run dev`: Launch local Vite dev server at `http://localhost:5173`.
- `npm run build`: Compile tree-shaken, optimized production bundle into `dist/`.
- `npm run preview`: Preview production build locally.
