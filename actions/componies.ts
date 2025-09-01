import axios from "axios";

const API_BASE_URL = "https://ops.isnad-iq.com/api";

export async function getcompanies(
  page: number = 1,
  perPage: number = 10
): Promise<any> {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies`, {
      params: {
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
}

export async function getCompanyById(id: string): Promise<{ item: any }> {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching complex by ID:", error);
    throw error;
  }
}
