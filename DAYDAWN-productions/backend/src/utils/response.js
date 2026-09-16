/**
 * Standardized API Response Helpers
 */
const successResponse = (res, data, statusCode = 200, message = 'Success') => {
  return res.status(statusCode).json({
    status: 'success',
    message,
    data,
  });
};

const errorResponse = (res, message = 'Error', statusCode = 500, details = null) => {
  return res.status(statusCode).json({
    status: `${statusCode}`.startsWith('4') ? 'fail' : 'error',
    message,
    details,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
