import axios from "axios";
import React from "react";
const axiosPublic = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});
export const useAxiosSequre = () => {
  return axiosPublic;
};
