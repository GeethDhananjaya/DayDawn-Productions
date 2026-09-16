# DAYDAWN Productions - Backend REST API

Node.js & Express REST API architecture with layered domain separation.

---

## 1. Architecture Layers
- `src/controllers/`: HTTP handlers validating inputs and dispatching responses.
- `src/services/`: Domain business logic and orchestration.
- `src/repositories/`: Data access layer isolating queries and storage details.
- `src/models/`: Domain entities and input validation rules.
- `src/routes/`: Route declarations versioned under `/api/v1`.
- `src/middleware/`: Security (Helmet, CORS, Rate limiting), logging, and error handling.
- `src/config/`: Runtime environment configuration.
- `src/utils/`: Custom `AppError`, JSON logger, and standardized response envelopes.

---

## 2. API Endpoints
- `GET /api/v1/health`: System health and uptime.
- `GET /api/v1/productions`: Portfolio catalog with query filtering (`?category=...&limit=...`).
- `GET /api/v1/productions/:id`: Single production details.
- `POST /api/v1/inquiries`: Submit project inquiry.
- `GET /api/v1/inquiries`: Fetch inquiries (admin).

---

## 3. Local Development
```bash
cp .env.example .env
npm install
npm run dev
```
Runs at `http://localhost:5000`.
