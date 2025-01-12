import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState(null);

  const setUserToken = (token) => {
    try {
      const decoded = jwtDecode(String(token));

      setuser(decoded);
    } catch (error) {
      setuser(null);
    }
  };

  useEffect(() => {
    const unsubscribe = async () => {
      const token = Cookies.get("authToken");

      if (token) {
        setUserToken(token);
        setloading(false);
      } else {
        setuser(null);
        setloading(false);
      }

      setloading(false);
    };

    unsubscribe();
  }, []);

  const logout = () => {
    Cookies.remove("authToken");
    setuser(null);
    setloading(false);
  };

  const login = async (token) => {
    setloading(true);
    Cookies.set("authToken", token, { expires: 30 });
    setUserToken(token);
    setloading(false);
  };
  const data = { loading, user, logout, login, setuser };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
