import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global";

export const fetchCars = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cars`);
      console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};