/**
 * Inquiry Model Entity Schema
 */
class Inquiry {
  constructor({ id, name, email, phone = null, projectType, message, createdAt = new Date() }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.projectType = projectType;
    this.message = message;
    this.createdAt = createdAt;
  }

  static validate(payload) {
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
  }
}

module.exports = Inquiry;
