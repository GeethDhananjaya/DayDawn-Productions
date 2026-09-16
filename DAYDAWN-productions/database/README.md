# DAYDAWN Productions - Database Architecture

PostgreSQL relational database schema design, versioned migrations, and seeding scripts.

---

## 1. Schema Entities
- `production_categories`: High-level categories (Feature Film, Commercial, etc.).
- `productions`: Primary portfolio projects, metadata, credits, and synopsis.
- `media_assets`: Image and video assets associated with projects (prepared for Cloud/S3/CDN integration).
- `inquiries`: Client contact submissions and leads.

---

## 2. Migration Execution
When running with Docker Compose, SQL scripts in `database/migrations` are automatically executed on first database container initialization.

Manual execution against running PostgreSQL:
```bash
psql -U daydawn_user -d daydawn_db -f database/migrations/001_create_productions_table.sql
psql -U daydawn_user -d daydawn_db -f database/migrations/002_create_inquiries_table.sql
psql -U daydawn_user -d daydawn_db -f database/migrations/003_create_media_table.sql
psql -U daydawn_user -d daydawn_db -f database/seeds/001_initial_categories_and_services.sql
```
