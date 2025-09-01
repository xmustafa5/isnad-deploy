// src/actions/advertisements.ts
import axios from "axios";

const API_BASE_URL = "https://ops.isnad-iq.com/api";

export interface Advertisement {
  id: string;
  img: string;
  url: string;
  is_visible: {
    value: number;
    label: string;
  };
}

export interface AdvertisementsResponse {
  items: Advertisement[];
  total_pages: number;
  per_page: number;
  current_page: number;
}

export async function getAdvertisements(): Promise<AdvertisementsResponse> {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/advertisements?is_visible=1`,
      {
        params: { is_visible: 1 },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching advertisements:", error);
    throw error;
  }
}
