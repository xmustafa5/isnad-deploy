import axiosInstance from "./api";

export async function getRealEstates() {
  try {
    const response = await axiosInstance.get("/real_estates");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
