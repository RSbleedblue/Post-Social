import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(true);
  const [token, setToken] = useState("");

  const login = (newToken) => {
    localStorage.setItem("token",newToken);
    setIsAuthenticate(true)
    setToken(newToken);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsAuthenticate(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticate, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
