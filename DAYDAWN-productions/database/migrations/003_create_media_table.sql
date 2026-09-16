-- Migration: 003_create_media_table.sql
-- Description: Create media asset tracking table (for Cloud/S3 storage integration)

CREATE TABLE IF NOT EXISTS media_assets (
    id VARCHAR(100) PRIMARY KEY,
    production_id VARCHAR(100) REFERENCES productions(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL, -- image/jpeg, video/mp4, etc.
    storage_provider VARCHAR(50) DEFAULT 'local', -- local, s3, gcs, cdn
    storage_url TEXT NOT NULL,
    caption TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_media_production ON media_assets(production_id);
