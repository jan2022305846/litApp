import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadCurrentUser, saveCurrentUser, clearCurrentUser } from '../utils/storage';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const user = await loadCurrentUser();
    setCurrentUser(user);
    setIsLoggedIn(!!user);
  };

  const login = async (user) => {
    await saveCurrentUser(user);
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await clearCurrentUser();
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};