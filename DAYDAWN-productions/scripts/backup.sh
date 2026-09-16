#!/usr/bin/env bash
set -e

# ==============================================================================
# DAYDAWN Productions - Automated Backup Script
# ==============================================================================

BACKUP_DIR="${BACKUP_DIR:-./backups}"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DB_CONTAINER="${DB_CONTAINER:-daydawn_postgres}"
DB_NAME="${DB_NAME:-daydawn_db}"
DB_USER="${DB_USER:-daydawn_user}"

mkdir -p "$BACKUP_DIR"

echo ">> Initiating database backup at $TIMESTAMP..."

if command -v docker &> /dev/null && docker ps | grep -q "$DB_CONTAINER"; then
    docker exec "$DB_CONTAINER" pg_dump -U "$DB_USER" "$DB_NAME" | gzip > "$BACKUP_DIR/db_${DB_NAME}_${TIMESTAMP}.sql.gz"
    echo "✔ Database backup saved: $BACKUP_DIR/db_${DB_NAME}_${TIMESTAMP}.sql.gz"
else
    echo "ℹ PostgreSQL container not running. Skipping DB dump or use manual pg_dump."
fi

# Prune backups older than 14 days
find "$BACKUP_DIR" -type f -name "*.sql.gz" -mtime +14 -delete
echo "✔ Backup retention cleanup complete."
