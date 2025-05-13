// axiosServer.ts
"use server";

import axios from "axios";
import { cookies } from "next/headers";
// Optionally import NextResponse if you need to modify cookies in an API route:
// import { NextResponse } from "next/server";

const axiosServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
});

export async function axiosRequest(config: any) {
  // Retrieve cookies asynchronously
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  // Ensure headers exist on the config object
  config.headers = config.headers || {};
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  try {
    // Make the original request
    return await axiosServer.request(config);
  } catch (error: any) {
    // If the error status is 401 and a refresh token exists, try to refresh the access token
    if (error.response && error.response.status === 401 && refreshToken) {
      try {
        // Call the refresh endpoint
        const refreshResponse = await axiosServer.post("/users/refresh-token", {
          refresh_token: refreshToken,
        });
        console.log(refreshResponse.data.access_token, "refreshResponse");
        const newAccessToken = refreshResponse.data.access_token;

        // Here you would update the cookie with the new token.
        // Note: In a Next.js API route you could use NextResponse to set cookies.
        // For example:
        // const response = NextResponse.next();
        // response.cookies.set("token", newAccessToken);
        // But in this helper function you may need to trigger a mechanism to update the cookies.

        // Update the Authorization header with the new access token
        cookieStore.set("token", newAccessToken);
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        // Retry the original request with the new token
        return await axiosServer.request(config);
      } catch (refreshError: any) {
        // If the refresh endpoint returns a 403, clear both tokens.
        if (refreshError.response && refreshError.response.status === 403) {
          // Clear the cookies for access and refresh tokens.
          // How you do this depends on your setup.
          // In an API route, you might do:
          // const response = NextResponse.next();
          // response.cookies.delete("token");
          // response.cookies.delete("refresh");
          // return response;
          console.error("Refresh token expired. Removing tokens.");
        }
        // Propagate the error from the refresh attempt
        throw refreshError;
      }
    }
    // If the error is not 401 or no refresh token exists, propagate the original error
    throw error;
  }
}
