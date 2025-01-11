import axios from "axios";

export const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "https://api-fresh-harvest.code-commando.com",
    withCredentials: true,
  });
  return axiosPublic;
};
