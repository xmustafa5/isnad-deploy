import axios from "axios";

export async function getCompanies() {
  try {
    const response = await axios.get(
      "https://isnad-website.mem-iq.com/api/companies"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCompanyDetails({ id }: { id: string }) {
  try {
    const response = await axios.get(
      `https://isnad-website.mem-iq.com/api/companies/${id}`
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      return: error,
    };
  }
}
