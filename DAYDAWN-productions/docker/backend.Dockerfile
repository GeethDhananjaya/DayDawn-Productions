# Production Node.js Backend Container
FROM node:20-alpine AS base

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application source
COPY src/ ./src/

# Run as non-root user for container security
USER node

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "src/app.js"]
