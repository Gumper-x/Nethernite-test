import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://data.jsdelivr.com/v1",
  timeout: 80000,
});
httpClient.interceptors.request.use((config) => {
  return config;
});
