import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://api-fresh-harvest.code-commando.com",
  withCredentials: true,
});
export const useAxiosSequre = () => {
  return axiosPublic;
};
