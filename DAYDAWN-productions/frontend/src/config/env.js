/**
 * Validated environment configuration for DAYDAWN Productions
 * Prevents hard-coding values throughout the application.
 */

export const env = {
  appName: import.meta.env.VITE_APP_NAME || 'DAYDAWN Productions',
  appEnv: import.meta.env.VITE_APP_ENV || 'development',
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,

  // Base API configuration
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT) || 15000,

  // CDN & Static Media (future S3/Cloud storage)
  mediaCdnUrl: import.meta.env.VITE_MEDIA_CDN_URL || '',

  // Feature Flags
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
};

Object.freeze(env);
