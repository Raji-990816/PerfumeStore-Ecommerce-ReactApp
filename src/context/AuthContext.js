import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);  
  const [isAuthenticated, setIsAuthenticated] = useState(false);  
  const [message, setMessage] = useState(''); 
  const [errors, setErrors] = useState('');

  const login = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userEmail = existingUsers.some((u) => u.email === email);
    const userPassword = existingUsers.some((u) => u.password === password);

    if(userEmail){
      if (userEmail && userPassword) { 
        setUsers({userEmail, userPassword })
        setIsAuthenticated(true);
        setMessage('Login Successful!');
        setTimeout(() => {
          setMessage(""); 
        }, 2000);
      } else {
        setErrors('Invalid credentials. Please try again.');
        setTimeout(() => {
          setErrors(''); 
        }, 2000);
      }
    } else {
      setErrors('User not recognized! Register now.');
      setTimeout(() => {
        setErrors(''); 
      }, 2000);    }
  };

  const register = (name, email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userName = existingUsers.some((u) => u.name === name);
    const userEmail = existingUsers.some((u) => u.email === email);

    if (userName || userEmail ){
      setErrors('User already excits! Try unique name, email and password.');
      setTimeout(() => {
        setErrors('');
      }, 2000);

    } else {
      const updatedUsers = [...existingUsers, {name, email, password} ];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      setMessage('Registration Successful!');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  const logout = () => {
    setUsers(null);
    setIsAuthenticated(false);
    setMessage('Logged out successfully.');
    setTimeout(() => {
      setMessage(''); 
    }, 2000);
  };

  const values = {
    users, isAuthenticated, login, register, logout, message, errors
  }

  return (
    <AuthContext.Provider value={ values }>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
