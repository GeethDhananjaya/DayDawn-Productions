const Inquiry = require('../models/Inquiry');

// In-memory data store for initial staging / development
const inquiriesStore = [];

/**
 * Repository layer for Inquiries
 */
class InquiryRepository {
  async create(data) {
    const id = `inq_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const inquiry = new Inquiry({ id, ...data });
    inquiriesStore.push(inquiry);
    return inquiry;
  }

  async findAll() {
    return [...inquiriesStore];
  }

  async findById(id) {
    return inquiriesStore.find((item) => item.id === id) || null;
  }
}

module.exports = new InquiryRepository();
