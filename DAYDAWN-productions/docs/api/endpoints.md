# REST API Specification (v1)

Base URL: `/api/v1`

---

## 1. System Health
### `GET /health`
Returns the operational state, process memory, and uptime of the backend service.
- **Response**: `200 OK`
```json
{
  "status": "success",
  "message": "Service is healthy",
  "data": {
    "status": "operational",
    "service": "DAYDAWN Productions API",
    "uptime": 128.4,
    "timestamp": "2026-09-16T08:00:00.000Z",
    "environment": "production"
  }
}
```

---

## 2. Productions Portfolio
### `GET /productions`
Retrieve portfolio items with optional filters.
- **Query Parameters**:
  - `category` (optional, string): Filter by category (e.g. `Feature Film`, `Commercial`).
  - `limit` (optional, integer): Max number of items to return.
- **Response**: `200 OK`

### `GET /productions/:id`
Retrieve detailed metadata, specifications, and behind-the-scenes gallery for a single production.
- **Response**: `200 OK` or `404 Not Found`

---

## 3. Contact & Inquiries
### `POST /inquiries`
Submit a new project inquiry.
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "name": "Christopher Nolan",
  "email": "cn@syncopy.com",
  "phone": "+1 555-0199",
  "projectType": "Feature Film",
  "message": "New feature project requiring high format cinematography."
}
```
- **Response**: `201 Created`
