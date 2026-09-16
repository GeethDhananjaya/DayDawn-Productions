#!/usr/bin/env bash
# ==============================================================================
# DAYDAWN Productions - Production Health Check Script
# ==============================================================================

API_URL="${API_URL:-http://localhost:5000/api/v1/health}"
WEB_URL="${WEB_URL:-http://localhost}"

echo ">> Checking API Health: $API_URL"
if command -v curl &> /dev/null; then
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL" || echo "000")
    if [ "$HTTP_STATUS" = "200" ]; then
        echo "✔ API is healthy (HTTP $HTTP_STATUS)"
    else
        echo "⚠ API health check returned HTTP $HTTP_STATUS"
    fi
else
    echo "ℹ curl not installed. Skipping HTTP check."
fi
