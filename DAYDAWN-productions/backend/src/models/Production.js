const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: [true, 'Production title is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Feature Film', 'Commercial', 'Documentary', 'Music Video', 'VFX & Post-Production'],
      index: true,
    },
    year: {
      type: Number,
      required: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    client: {
      type: String,
      trim: true,
      default: null,
    },
    synopsis: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      default: '4K Digital',
    },
    coverImage: {
      type: String,
      default: null,
    },
    gallery: {
      type: [String],
      default: [],
    },
    isFeatured: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Production || mongoose.model('Production', productionSchema);
