import { apiClient } from '../api/apiClient';

/**
 * Service managing productions, showcase items, and portfolio queries
 */
export const productionService = {
  /**
   * Fetch list of productions with optional category filter
   * @param {Object} [params]
   * @param {string} [params.category]
   * @param {number} [params.limit]
   */
  async getProductions(params = {}) {
    const query = new URLSearchParams();
    if (params.category) query.append('category', params.category);
    if (params.limit) query.append('limit', String(params.limit));

    const queryString = query.toString();
    const endpoint = `/productions${queryString ? `?${queryString}` : ''}`;
    return apiClient.get(endpoint);
  },

  /**
   * Fetch single production details by ID or slug
   * @param {string} id
   */
  async getProductionById(id) {
    return apiClient.get(`/productions/${id}`);
  },
};
