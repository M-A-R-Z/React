import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // This flag determines if a user is logged in.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Temporarily store registered users
  const [users, setUsers] = useState([]);

  // Register a new user (signup)
  const registerUser = (newUser) => {
    // Optionally, check if the email already exists.
    setUsers([...users, newUser]);
  };

  // Validate user credentials on login
  const loginUser = ({ usernameOrEmail, password }) => {
    // Here you could validate with either the username or studentEmail depending on what you require.
    const user = users.find(
      (u) =>
        (u.studentEmail === usernameOrEmail || u.username === usernameOrEmail) &&
        u.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
