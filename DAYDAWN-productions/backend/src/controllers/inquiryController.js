const inquiryService = require('../services/inquiryService');
const { successResponse } = require('../utils/response');

const createInquiry = async (req, res, next) => {
  try {
    const inquiry = await inquiryService.submitInquiry(req.body);
    return successResponse(res, inquiry, 201, 'Inquiry successfully submitted');
  } catch (err) {
    next(err);
  }
};

const getInquiries = async (req, res, next) => {
  try {
    const inquiries = await inquiryService.getAllInquiries();
    return successResponse(res, inquiries, 200, 'Inquiries retrieved');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createInquiry,
  getInquiries,
};
