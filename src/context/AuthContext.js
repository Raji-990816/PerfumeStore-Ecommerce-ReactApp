import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  
  const [isAuthenticated, setIsAuthenticated] = useState(false);  
  const [message, setMessage] = useState(''); 

  const login = (email, password) => {
    if (email === 'user@example.com' && password === '123456') {
      setUser({ email });  
      setIsAuthenticated(true);
      setMessage('Login Successful!');
      setTimeout(() => {
        setMessage(""); 
      }, 2000);
    } else {
      setMessage('Invalid credentials. Please try again.');
      setTimeout(() => {
        setMessage(""); 
      }, 2000);
    }
  };

  const register = (email, password) => {
    setUser({ email });
    setIsAuthenticated(true);
    setMessage('Registration Successful!');
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setMessage('Logged out successfully.');
    setTimeout(() => {
      setMessage(""); 
    }, 2000);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, message }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
