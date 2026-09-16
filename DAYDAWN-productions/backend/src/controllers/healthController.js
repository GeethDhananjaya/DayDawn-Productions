const { successResponse } = require('../utils/response');

const checkHealth = (req, res) => {
  const healthData = {
    status: 'operational',
    service: 'DAYDAWN Productions API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    memoryUsage: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development',
  };

  return successResponse(res, healthData, 200, 'Service is healthy');
};

module.exports = {
  checkHealth,
};
