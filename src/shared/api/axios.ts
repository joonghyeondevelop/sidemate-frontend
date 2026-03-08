import axios from "axios";
import { useAuthStore } from "../../features/auth/store/auth.store";

export const api = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

const refreshClient = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  console.log("request interceptor token:", token);
  console.log("request url:", config.url);

  config.headers = config.headers ?? {};
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("final auth header:", config.headers.Authorization);
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest?.url !== "/auth/refresh"
    ) {
      originalRequest._retry = true;
      try {
        const res = await refreshClient.post("/auth/refresh");

        console.log(res.data, ": refresh res");

        const newToken = res.data.accessToken;

        localStorage.setItem("accessToken", newToken);
        console.log(localStorage.getItem("accessToken"), "refresh 저장 후");

        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api.request(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        useAuthStore.getState().clearAuth();

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
