
import axios from "axios";

const API_BASE_URL = "https://ops.isnad-iq.com/api";

export async function getDevelopers(page: number = 1, perPage: number = 10, isVisible?: number) {
  try {
    const response = await axios.get(`${API_BASE_URL}/developers`, {
      params: {
        page,
        per_page: perPage,
        is_visible: isVisible,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching developers:", error);
    throw error;
  }
}
