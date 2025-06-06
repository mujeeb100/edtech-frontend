'use client';

import React, { useState, createContext, useContext, useEffect } from 'react';
import { User } from '../types/index'; // Import your User type

interface UserContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  // Load user from local storage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUserState(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user from local storage", error);
        localStorage.removeItem('user'); // Clear corrupted data
      }
    }
  }, []);

  const login = (user: User) => {
    setUserState(user);
    localStorage.setItem('user', JSON.stringify(user)); // Persist to local storage
  };

  const logout = () => {
    setUserState(null);
    localStorage.removeItem('user');
  };
  const setUser = (user: User | null) => {
    setUserState(user);
  }

  const contextValue = {
    user,
    login,
    logout,
    setUser
  };

  if (!contextValue) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};



const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw  Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
