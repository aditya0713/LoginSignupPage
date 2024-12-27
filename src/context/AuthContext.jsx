// // src/context/AuthContext.jsx
// import React, { createContext, useState, useContext } from "react";

// // Create context
// export const AuthContext = createContext();

// // Auth provider component
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the auth context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

import React, { createContext, useState, useContext } from "react";

// Create context
export const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = (email, password) => {
    // You can replace this with actual authentication logic (API call, etc.)
    if (email === "aditya@gmail.com" && password === "12345") {
      setIsAuthenticated(true);
      return true; // Simulate successful login
    } else {
      return false; // Simulate failed login
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
