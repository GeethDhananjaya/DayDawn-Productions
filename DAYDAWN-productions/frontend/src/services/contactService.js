import { apiClient } from '../api/apiClient';

/**
 * Service handling contact submissions and project inquiries
 */
export const contactService = {
  /**
   * Submit new contact / project inquiry
   * @param {Object} payload
   * @param {string} payload.name
   * @param {string} payload.email
   * @param {string} [payload.phone]
   * @param {string} payload.projectType
   * @param {string} payload.message
   */
  async submitInquiry(payload) {
    return apiClient.post('/inquiries', payload);
  },
};
