import axios from "axios";
import type { Airport, RawAirport } from "../types";

const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

export const fetchAirportsByQuery = async (query: string): Promise<Airport[]> => {
  const response = await axios.get<{ data: RawAirport[] }>(
    `https://${RAPIDAPI_HOST}/api/v1/flights/searchAirport`,
    {
      params: { query, locale: "en-US" },
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
      },
    }
  );

  return response.data.data.map((a) => ({
    skyId: a.skyId,
    name: a.presentation.suggestionTitle || a.presentation.title,
    city: a.navigation.relevantHotelParams.localizedName,
    country: a.presentation.subtitle,
    entityId: a.entityId,
  }));
};