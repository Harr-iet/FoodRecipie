import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";


export const customFetch = axios.create({
    baseURL:  `https://food-recipe-api-zwxr.onrender.com/api/v1`,
});

customFetch.interceptors.request.use(
    (config) => {
      const user = getUserFromLocalStorage();
      if (user) {
        config.headers["Authorization"] = `Bearer ${user.access_token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );