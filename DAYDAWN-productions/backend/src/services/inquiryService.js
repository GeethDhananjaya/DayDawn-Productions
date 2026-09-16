const inquiryRepository = require('../repositories/inquiryRepository');
const Inquiry = require('../models/Inquiry');
const AppError = require('../utils/appError');
const logger = require('../utils/logger');

class InquiryService {
  async submitInquiry(data) {
    const { isValid, errors } = Inquiry.validate(data);
    if (!isValid) {
      throw new AppError('Validation failed for inquiry submission', 400, errors);
    }

    const inquiry = await inquiryRepository.create(data);
    logger.info(`New inquiry received: [${inquiry.id}] from ${inquiry.email}`);

    // Future email notification hook (e.g. SendGrid / AWS SES) can be cleanly triggered here

    return inquiry;
  }

  async getAllInquiries() {
    return inquiryRepository.findAll();
  }
}

module.exports = new InquiryService();
