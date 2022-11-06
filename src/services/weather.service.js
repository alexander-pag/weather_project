import axios from "axios";
import { API_ACCESS_KEY } from '../config/config'

const baseURL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  try {
    const response = await axios.get(
      `${baseURL}?q=${city}&appid=${API_ACCESS_KEY}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
