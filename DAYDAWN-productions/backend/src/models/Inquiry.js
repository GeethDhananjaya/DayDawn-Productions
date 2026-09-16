const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      trim: true,
      default: null,
    },
    projectType: {
      type: String,
      required: [true, 'Project type is required'],
      enum: [
        'Feature Film',
        'Commercial',
        'Commercial / Brand',
        'Documentary',
        'Music Video',
        'Post-Production / VFX',
        'Photography',
        'Event Production',
        'Creative Production',
      ],
      default: 'Commercial',
    },
    message: {
      type: String,
      required: [true, 'Project message is required'],
      minlength: [10, 'Message must be at least 10 characters'],
    },
    status: {
      type: String,
      enum: ['NEW', 'IN_REVIEW', 'CONTACTED', 'ARCHIVED'],
      default: 'NEW',
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Fallback plain validator for in-memory checks if needed
inquirySchema.statics.validatePayload = function (payload) {
  const errors = [];
  if (!payload.name || payload.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push('Valid email address is required.');
  }
  if (!payload.message || payload.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }
  return {
    isValid: errors.length === 0,
    errors,
  };
};

module.exports = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);
