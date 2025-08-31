import axios from "axios";
import { CitiesResponse, CityItem } from "@/types/citiesType";

const API_BASE_URL = "https://ops.isnad-iq.com/api";

export async function getCities(
  page: number = 1,
  perPage: number = 10,
  isVisible?: number,
  governorateId?: string
): Promise<CitiesResponse> {
  try {
    const response = await axios.get(`${API_BASE_URL}/cities`, {
      params: {
        page,
        per_page: perPage,
        is_visible: isVisible,
        governorate_id: governorateId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
}

export async function getCityById(id: string): Promise<{ item: CityItem }> {
  try {
    const response = await axios.get(`${API_BASE_URL}/cities/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching city by ID:", error);
    throw error;
  }
}

