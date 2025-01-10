import axios from "axios";

export const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
  });
  return axiosPublic;
};
