#!/usr/bin/env bash
set -e

# ==============================================================================
# DAYDAWN Productions - Production Deployment Runner
# ==============================================================================

echo "=========================================="
echo " DAYDAWN Productions Deployment Runner"
echo "=========================================="

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

# 1. Check environment files
if [ ! -f "frontend/.env" ]; then
    echo "Creating frontend/.env from .env.example..."
    cp frontend/.env.example frontend/.env
fi

if [ ! -f "backend/.env" ]; then
    echo "Creating backend/.env from .env.example..."
    cp backend/.env.example backend/.env
fi

# 2. Build artifacts
echo ">> Running build suite..."
./scripts/build.sh

# 3. Docker Deployment mode
if command -v docker &> /dev/null && command -v docker-compose &> /dev/null; then
    echo ">> Deploying containers via Docker Compose..."
    docker-compose up -d --build --remove-orphans
    echo "✔ Containers started."
else
    echo "ℹ Docker not detected or running bare-metal mode."
    echo "  Ensure frontend/dist is served by Nginx and backend is running via systemd/PM2."
fi

# 4. Verify Health
echo ">> Running post-deployment health check..."
./scripts/health-check.sh

echo "=========================================="
echo "✔ Deployment Verified Successfully!"
echo "=========================================="
