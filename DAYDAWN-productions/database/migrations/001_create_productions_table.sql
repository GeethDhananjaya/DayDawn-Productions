-- Migration: 001_create_productions_table.sql
-- Description: Create productions and categories tables

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS production_categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS productions (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category_id VARCHAR(50) REFERENCES production_categories(id) ON DELETE SET NULL,
    year INTEGER NOT NULL,
    director VARCHAR(150) NOT NULL,
    client VARCHAR(150),
    synopsis TEXT NOT NULL,
    format VARCHAR(100) DEFAULT '4K Digital',
    cover_image_url TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_productions_category ON productions(category_id);
CREATE INDEX IF NOT EXISTS idx_productions_featured ON productions(is_featured);
