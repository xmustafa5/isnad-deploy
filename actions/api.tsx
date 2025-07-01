"use server";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Request interceptor
axiosInstance.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refresh_token")?.value;

    // Handle 401 Unauthorized error
    if (error.response?.status === 401 && refreshToken) {
      try {
        // Attempt to refresh the token
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/users/refresh-token`,
          { refresh_token: refreshToken }
        );

        if (response.status === 200) {
          // Update cookies with new tokens
          cookieStore.set("token", response.data.access_token);
          cookieStore.set("refresh_token", response.data.refresh_token);

          // Retry the original request with new token
          const originalRequest = error.config;
          originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        // If refresh token fails, clear both tokens
        cookieStore.delete("token");
        cookieStore.delete("refresh_token");
      }
    }

    // If refresh failed or wasn't attempted, clear tokens and reject
    if (error.response?.status === 401) {
      cookieStore.delete("token");
      cookieStore.delete("refresh_token");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
