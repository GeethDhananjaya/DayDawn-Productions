# DAYDAWN Productions - Production Architecture

> **DAYDAWN Productions** is a high-end cinematic, commercial, and creative video production company. This repository contains the complete production-ready source code, multi-tier system architecture, deployment configurations, and automated workflows.

---

## 1. Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, React Router v6, Vanilla CSS (Design Tokens & Modular Styles) |
| **Backend** | Node.js (v20+ / v24+), Express REST API, Helmet, CORS, Rate-Limiter |
| **Database** | PostgreSQL 16 (Relational models, versioned SQL migrations) |
| **Reverse Proxy** | Nginx (SSL/TLS termination, HTTP/2, Brotli/Gzip, Cache-Control, Static assets) |
| **Containers** | Docker, Docker Compose (Multi-stage builds, non-root runtimes) |
| **CI/CD** | GitHub Actions (Automated linting, building, vulnerability scanning) |
| **Ops & Scripts** | POSIX Bash automation (Build, Deploy, Backup, Health-Check) |

---

## 2. Directory Architecture

```
DAYDAWN-productions/
│
├── frontend/                     # Client-side React + Vite SPA
│   ├── public/                   # Static unbundled assets
│   │   ├── favicon/              # App & browser favicons
│   │   ├── images/               # Fallback public imagery
│   │   ├── videos/               # Public video banners / preview showreel
│   │   ├── fonts/                # Self-hosted web fonts
│   │   └── robots.txt            # Search crawler directives
│   │
│   ├── src/
│   │   ├── assets/               # Bundled static assets (images, icons, logos, fonts)
│   │   ├── components/           # Reusable UI component library
│   │   │   ├── common/           # Foundation elements (Button, Loading, Error, Title)
│   │   │   ├── layout/           # Global structural elements (Header, Footer, Container)
│   │   │   ├── navigation/       # Navigation bars and mobile drawer
│   │   │   ├── sections/         # Composed page sections (Hero, Showcase, Contact)
│   │   │   └── ui/               # Advanced interactive elements (Modal, Gallery, Card)
│   │   ├── pages/                # Route target views (Home, About, Services, etc.)
│   │   ├── layouts/              # Route frame templates (MainLayout, AdminLayout)
│   │   ├── hooks/                # Custom reusable React hooks
│   │   ├── services/             # Domain business logic & API communication
│   │   ├── api/                  # Base HTTP client with interceptors & configuration
│   │   ├── utils/                # Pure utility functions (formatting, validation)
│   │   ├── constants/            # Application constants, categories, and route keys
│   │   ├── config/               # Centralized environment variable validation
│   │   ├── types/                # Type definitions and data shape contracts
│   │   ├── routes/               # Centralized routing definitions (React Router)
│   │   ├── context/              # Global state contexts (Theme, Notifications)
│   │   ├── styles/               # CSS design system, variables, reset & typography
│   │   ├── main.jsx              # DOM entry point
│   │   └── App.jsx               # Root component with providers and router
│   │
│   ├── .env.example              # Frontend environment blueprint
│   ├── .gitignore                # Frontend-specific exclusions
│   ├── package.json              # Frontend manifest & scripts
│   ├── vite.config.js            # Vite build and dev configuration
│   └── README.md                 # Frontend specific guide
│
├── backend/                      # Node.js / Express REST API
│   ├── src/
│   │   ├── controllers/          # HTTP request handlers & response orchestration
│   │   ├── services/             # Core business rules & external integrations
│   │   ├── repositories/         # Database access layer (abstraction over queries)
│   │   ├── models/               # Domain data contracts & schemas
│   │   ├── routes/               # Express route declarations (versioned: /api/v1)
│   │   ├── middleware/           # Security, auth, logging, rate limiting & error handlers
│   │   ├── config/               # Server configuration & environment validation
│   │   ├── utils/                # Custom AppError, Logger & standard response helpers
│   │   └── app.js                # Express app factory & graceful lifecycle management
│   ├── tests/                    # Unit, integration, and smoke test suites
│   ├── .env.example              # Backend environment blueprint
│   ├── .gitignore                # Backend-specific exclusions
│   ├── package.json              # Backend manifest & dependencies
│   └── README.md                 # Backend API documentation
│
├── database/                     # Relational data layer
│   ├── migrations/               # Versioned, reproducible SQL schema migrations
│   ├── seeds/                    # Initial developmental & production seed data
│   └── README.md                 # Schema dictionary & migration lifecycle guide
│
├── nginx/                        # Production web server & reverse proxy
│   ├── daydawn.conf              # Production Nginx virtual host with SSL & caching
│   └── README.md                 # Reverse proxy configuration & tuning guide
│
├── docker/                       # Containerization recipes
│   ├── frontend.Dockerfile       # Multi-stage build -> Alpine Nginx runtime
│   ├── backend.Dockerfile        # Multi-stage build -> Non-root Node.js Alpine runtime
│   └── nginx.Dockerfile          # Edge gateway proxy container
│
├── scripts/                      # Operational automation
│   ├── build.sh                  # Multi-service build coordinator
│   ├── deploy.sh                 # Zero-downtime deployment runner
│   ├── backup.sh                 # Automated database & media backup tool
│   └── health-check.sh           # Deep system health verification
│
├── docs/                         # Architecture & operational manuals
│   ├── architecture/             # System diagrams, tiers, and data flows
│   ├── api/                      # OpenAPI specifications & endpoints
│   ├── deployment/               # Cloud VPS & Bare-metal deployment guide
│   └── database/                 # Schema models & entity relationship mapping
│
├── .github/workflows/            # Continuous Integration & Delivery
│   ├── frontend.yml              # Frontend test, lint & build pipeline
│   └── backend.yml               # Backend test, lint & security audit pipeline
│
├── docker-compose.yml            # Multi-container orchestration
├── .gitignore                    # Global git ignore configuration
├── README.md                     # Repository overview & quick start
└── LICENSE                       # MIT License
```

---

## 3. Local Development Setup

### Prerequisites
- **Node.js**: v20.0.0 or higher (v24 LTS recommended)
- **npm**: v10.0.0 or higher
- **Docker & Docker Compose** (optional for containerized workflow)

### 3.1 Frontend Setup
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```
The frontend will start at: `http://localhost:5173/`

### 3.2 Backend Setup
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
The backend API will start at: `http://localhost:5000/api/v1`

---

## 4. Environment Configuration

### Frontend (`frontend/.env`)
```ini
VITE_APP_NAME="DAYDAWN Productions"
VITE_API_BASE_URL="http://localhost:5000/api/v1"
VITE_MEDIA_CDN_URL=""
VITE_ENABLE_ANALYTICS=false
```

### Backend (`backend/.env`)
```ini
NODE_ENV=development
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
DATABASE_URL=postgres://daydawn_user:daydawn_secure_password@localhost:5432/daydawn_db
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
LOG_LEVEL=info
```

---

## 5. Production Build & Verification

To compile the production bundles:

```bash
# Frontend production bundle
cd frontend
npm run build

# Or use the top-level orchestration script
./scripts/build.sh
```

The optimized static assets will be emitted to `frontend/dist/`.

---

## 6. Docker Deployment

To launch the complete multi-service stack with a single command:

```bash
docker-compose up -d --build
```

Services initialized:
- `daydawn_nginx` on ports `80` and `443`
- `daydawn_frontend` internal static container
- `daydawn_backend` internal API container on port `5000`
- `daydawn_postgres` PostgreSQL database on port `5432`

---

## 7. Operational Scripts

Executable scripts in `./scripts/`:

```bash
chmod +x scripts/*.sh

# Run health checks
./scripts/health-check.sh

# Run comprehensive build
./scripts/build.sh

# Run local/remote deployment
./scripts/deploy.sh

# Run automated database backup
./scripts/backup.sh
```

---

## 8. Security & Production Standards

- **Zero Hard-Coded Credentials**: All configurations derive from strictly validated environment variables.
- **Strict Separation of Concerns**: UI components never call `fetch()` directly; network requests flow through `apiClient` -> `service` -> `controller`.
- **Hardened Nginx**: Includes HSTS, CSP, X-Frame-Options, MIME sniffing protection, Brotli/Gzip compression, and micro-caching for static assets.
- **Non-Root Containers**: Docker images drop permissions to unprivileged service users (`nginx`, `node`).
