import axios from "axios";

export async function getCompanies() {
  try {
    const response = await axios.get(
      "https://app-web-api-test.isnad-iq.com/api/companies"
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      return: error,
    };
  }
}
export async function getCompanyDetails({ id }: { id: string }) {
  console.log(id);

  try {
    const response = await axios.get(
      `https://app-web-api-test.isnad-iq.com/api/companies/${id}`
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      return: error,
    };
  }
}
