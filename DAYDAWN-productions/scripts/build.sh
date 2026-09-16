#!/usr/bin/env bash
set -e

# ==============================================================================
# DAYDAWN Productions - Automated Build Script
# ==============================================================================

echo "=========================================="
echo " Starting DAYDAWN Productions Build Pipeline"
echo "=========================================="

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

echo ">> 1. Building Frontend SPA..."
cd "$ROOT_DIR/frontend"
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi
npm run build
echo "✔ Frontend build completed successfully."

echo ">> 2. Testing & Validating Backend API..."
cd "$ROOT_DIR/backend"
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
fi
npm test
echo "✔ Backend tests completed successfully."

echo "=========================================="
echo "✔ Build Pipeline Finished Cleanly!"
echo "=========================================="
