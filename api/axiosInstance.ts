import { tokenStorage } from "@/constants/secureStorage";
import axios from "axios";

let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;
const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await tokenStorage.getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.request.use((config) => {
  const token = tokenStorage.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status !== 401 || original._retry) {
      return Promise.reject(error);
    }

    original._retry = true;

    try {
      if (!isRefreshing) {
        isRefreshing = true;
        const token = await refreshToken();
        original.headers.Authorization = `Bearer ${token}`;
        return axiosInstance(original);
      }

      const token = await refreshPromise!;
      original.headers.Authorization = `Bearer ${token}`;
      return axiosInstance(original);
    } catch {
      tokenStorage.clear();
      // trigger logout via event / store
      return Promise.reject(error);
    }
  }
);

async function refreshToken() {
  if (!refreshPromise) {
    refreshPromise = axiosInstance
      .post("/auth/refresh")
      .then((res) => {
        tokenStorage.setAccessToken(res.data.accessToken);
        return res.data.accessToken;
      })
      .finally(() => {
        isRefreshing = false;
        refreshPromise = null;
      });
  }

  return refreshPromise;
}
