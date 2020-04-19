import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001/api" });
api.interceptors.request.use((config) => {
  console.log(config);

  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
export default api;
