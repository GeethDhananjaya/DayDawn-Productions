import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authService } from './authService';
import { hasPermission as checkPermission } from './rolePermissions';

export const AuthContext = createContext({
  user: null,
  role: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
  hasRole: () => false,
  hasPermission: () => false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize session from storage on mount
  useEffect(() => {
    const existingSession = authService.getStoredSession();
    if (existingSession) {
      setUser(existingSession);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (credentials) => {
    setIsLoading(true);
    try {
      const authenticatedUser = await authService.login(credentials);
      setUser(authenticatedUser);
      return authenticatedUser;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const hasRole = useCallback(
    (requiredRoles) => {
      if (!user || !user.role) return false;
      const rolesArray = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
      return rolesArray.includes(user.role);
    },
    [user]
  );

  const hasPermission = useCallback(
    (permission) => {
      if (!user || !user.role) return false;
      return checkPermission(user.role, permission);
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user?.role || null,
        isAuthenticated: Boolean(user),
        isLoading,
        login,
        logout,
        hasRole,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
