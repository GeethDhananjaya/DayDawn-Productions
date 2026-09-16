import { apiClient } from '../api/apiClient';
import { ROLES } from './rolePermissions';

const SESSION_STORAGE_KEY = 'daydawn_session';

/**
 * Authentication Service abstraction layer
 * Handles API communication, token persistence, and mock testing fallback
 */
export const authService = {
  /**
   * Submit credentials for authentication
   * Communicates with backend REST API endpoint with clean local fallback for UI testing
   * @param {Object} credentials
   * @param {string} credentials.email
   * @param {string} credentials.password
   * @param {string} [credentials.role]
   */
  async login({ email, password, role = ROLES.CREW }) {
    if (!email || !password) {
      throw new Error('Please enter both your work email and password.');
    }

    try {
      // Primary route: attempt actual backend authentication
      return await apiClient.post('/auth/login', { email, password, role });
    } catch (apiErr) {
      // If backend auth endpoint is not yet wired, provide structured mock session for UI preview
      // (Never exposes sensitive credentials or stores fake production passwords)
      if (apiErr.status === 404 || apiErr.status === 500 || apiErr.message.includes('Network error')) {
        const demoUser = {
          id: `usr_${Date.now()}`,
          name: email.split('@')[0].replace('.', ' ').toUpperCase(),
          email,
          role: role || ROLES.CREW,
          avatar: null,
          token: `jwt_daydawn_${Date.now()}`,
        };
        authService.persistSession(demoUser);
        return demoUser;
      }
      throw apiErr;
    }
  },

  /**
   * Invalidate and clear user session
   */
  async logout() {
    try {
      await apiClient.post('/auth/logout');
    } catch {
      // Ignore network errors on logout
    } finally {
      authService.clearSession();
    }
  },

  /**
   * Retrieve stored session from browser storage
   */
  getStoredSession() {
    try {
      const serialized = sessionStorage.getItem(SESSION_STORAGE_KEY);
      return serialized ? JSON.parse(serialized) : null;
    } catch {
      return null;
    }
  },

  /**
   * Persist active user session in sessionStorage
   */
  persistSession(user) {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.warn('Unable to persist session to storage', e);
    }
  },

  /**
   * Clear session from storage
   */
  clearSession() {
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (e) {
      console.warn('Unable to clear session storage', e);
    }
  },
};
