import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Change to manage user object

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Initialize user from localStorage
    }
  }, []);

  const login = (userData, navigate) => {
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data instead of just the token
    setUser(userData);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user, // Derive isAuthenticated from user presence
        user, // Provide the whole user object
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
