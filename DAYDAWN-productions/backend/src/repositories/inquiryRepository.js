const mongoose = require('mongoose');
const Inquiry = require('../models/Inquiry');
const logger = require('../utils/logger');

// In-memory fallback store if MongoDB is offline during local test
const inMemoryStore = [];

class InquiryRepository {
  isDbConnected() {
    return mongoose.connection.readyState === 1;
  }

  async create(data) {
    if (this.isDbConnected()) {
      try {
        const doc = await Inquiry.create(data);
        return doc.toObject();
      } catch (err) {
        logger.error('Error creating inquiry in MongoDB:', err);
        throw err;
      }
    }

    const fallback = {
      id: `inq_${Date.now()}`,
      ...data,
      status: 'NEW',
      createdAt: new Date(),
    };
    inMemoryStore.push(fallback);
    return fallback;
  }

  async findAll() {
    if (this.isDbConnected()) {
      return Inquiry.find().sort({ createdAt: -1 }).lean();
    }
    return [...inMemoryStore];
  }

  async findById(id) {
    if (this.isDbConnected()) {
      return Inquiry.findById(id).lean();
    }
    return inMemoryStore.find((i) => i.id === id) || null;
  }
}

module.exports = new InquiryRepository();
