import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext("");

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8800/api/userRoutes/login", inputs);
      setCurrentUser(res.data);
      localStorage.setItem('jwtkey', res.data.token); 
      return res.data;  
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err.message);
      throw err.response ? err.response.data : new Error("Login failed");
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
);
};
