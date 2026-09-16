const mongoose = require('mongoose');
const Production = require('../models/Production');
const logger = require('../utils/logger');

const defaultProductions = [
  {
    slug: 'solaris-rising',
    title: 'Solaris Rising',
    category: 'Feature Film',
    year: 2025,
    director: 'Elena Vance',
    client: 'Vanguard Pictures',
    synopsis: 'A deep space geological expedition on a dying star discovers strange energetic anomalies.',
    format: 'ARRI Alexa 65 / Panavision Spherical',
    isFeatured: true,
  },
  {
    slug: 'chronos-vanguard',
    title: 'Chronos Vanguard',
    category: 'Commercial',
    year: 2026,
    director: 'Marcus Thorne',
    client: 'Chronos Swiss Horology',
    synopsis: 'Luxury timepiece global commercial campaign shot on 65mm format.',
    format: '65mm Film / Hasselblad Prime',
    isFeatured: true,
  },
  {
    slug: 'the-last-echo',
    title: 'The Last Echo',
    category: 'Documentary',
    year: 2024,
    director: 'Julian Cole',
    client: 'Oceanic Heritage Trust',
    synopsis: 'Deep ocean acoustic discovery uncovering silent marine migration paths.',
    format: 'RED V-Raptor 8K Underwater Housing',
    isFeatured: true,
  },
];

class ProductionRepository {
  isDbConnected() {
    return mongoose.connection.readyState === 1;
  }

  async seedInitialIfNeeded() {
    if (this.isDbConnected()) {
      try {
        const count = await Production.countDocuments();
        if (count === 0) {
          await Production.insertMany(defaultProductions);
          logger.info('Initialized default production portfolio records in MongoDB.');
        }
      } catch (err) {
        logger.error('Error seeding initial productions in MongoDB:', err);
      }
    }
  }

  async findAll({ category, limit } = {}) {
    if (this.isDbConnected()) {
      const filter = {};
      if (category && category !== 'All') {
        filter.category = new RegExp(`^${category}$`, 'i');
      }
      let query = Production.find(filter).sort({ year: -1 });
      if (limit) {
        query = query.limit(parseInt(limit, 10));
      }
      const results = await query.lean();
      if (results.length > 0) return results;
    }

    let results = [...defaultProductions];
    if (category && category !== 'All') {
      results = results.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (limit) {
      results = results.slice(0, parseInt(limit, 10));
    }
    return results;
  }

  async findById(id) {
    if (this.isDbConnected()) {
      const bySlug = await Production.findOne({ slug: id }).lean();
      if (bySlug) return bySlug;
      if (mongoose.Types.ObjectId.isValid(id)) {
        return Production.findById(id).lean();
      }
    }
    return defaultProductions.find((p) => p.slug === id) || null;
  }
}

module.exports = new ProductionRepository();
