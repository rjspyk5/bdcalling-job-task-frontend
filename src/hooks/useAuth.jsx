import React, { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
