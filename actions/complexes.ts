import axios from "axios";
import { ComplexesResponse, ComplexItem } from "@/types/complexesType";

const API_BASE_URL = "https://ops.isnad-iq.com/api";

export async function getComplexes(
  page: number = 1,
  perPage: number = 10,
  developerId?: string
): Promise<ComplexesResponse> {
  try {
    const response = await axios.get(`${API_BASE_URL}/complexes`, {
      params: {
        page,
        per_page: perPage,
        ...(developerId && { developer_id: developerId }),
        is_visible: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching complexes:", error);
    throw error;
  }
}

export async function getComplexById(
  id: string
): Promise<{ item: ComplexItem }> {
  try {
    const response = await axios.get(`${API_BASE_URL}/complexes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching complex by ID:", error);
    throw error;
  }
}
