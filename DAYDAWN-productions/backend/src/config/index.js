/**
 * Validated server configuration for DAYDAWN Productions Backend
 */
const config = {
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  port: parseInt(process.env.PORT, 10) || 5000,
  host: process.env.HOST || '0.0.0.0',

  cors: {
    origin: process.env.CLIENT_ORIGIN
      ? process.env.CLIENT_ORIGIN.split(',').map((o) => o.trim())
      : ['http://localhost:5173', 'http://localhost'],
  },

  db: {
    url: process.env.DATABASE_URL || 'postgres://daydawn_user:daydawn_secure_password@localhost:5432/daydawn_db',
  },

  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000,
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 100,
  },

  logLevel: process.env.LOG_LEVEL || 'info',
};

module.exports = Object.freeze(config);
