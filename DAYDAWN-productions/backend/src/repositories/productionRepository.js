const Production = require('../models/Production');

// Preloaded initial production catalogue
const initialProductions = [
  new Production({
    id: 'solaris-rising',
    title: 'Solaris Rising',
    category: 'Feature Film',
    year: 2025,
    director: 'Elena Vance',
    client: 'Vanguard Pictures',
    synopsis: 'A deep space geological expedition on a dying star discovers strange energetic anomalies.',
    format: 'ARRI Alexa 65 / Panavision Spherical',
    isFeatured: true,
  }),
  new Production({
    id: 'chronos-vanguard',
    title: 'Chronos Vanguard',
    category: 'Commercial',
    year: 2026,
    director: 'Marcus Thorne',
    client: 'Chronos Swiss Horology',
    synopsis: 'Luxury timepiece global commercial campaign shot on 65mm format.',
    format: '65mm Film / Hasselblad Prime',
    isFeatured: true,
  }),
  new Production({
    id: 'the-last-echo',
    title: 'The Last Echo',
    category: 'Documentary',
    year: 2024,
    director: 'Julian Cole',
    client: 'Oceanic Heritage Trust',
    synopsis: 'Deep ocean acoustic discovery uncovering silent marine migration paths.',
    format: 'RED V-Raptor 8K Underwater Housing',
    isFeatured: true,
  }),
];

/**
 * Repository layer for Productions
 */
class ProductionRepository {
  async findAll({ category, limit } = {}) {
    let results = [...initialProductions];
    if (category && category !== 'All') {
      results = results.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (limit) {
      results = results.slice(0, parseInt(limit, 10));
    }
    return results;
  }

  async findById(id) {
    return initialProductions.find((p) => p.id === id) || null;
  }
}

module.exports = new ProductionRepository();
