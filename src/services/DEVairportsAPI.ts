import type { Airport } from "../types";

import { getFalseFetchAirports } from "./DEVFetchAirports";

export const fetchAirportsByQuery = async (query: string): Promise<Airport[]> => {
    console.log(query)

  const response = getFalseFetchAirports();
  return response.data.map((a) => ({
    id: a.skyId,
    name: a.presentation.suggestionTitle || a.presentation.title,
    city: a.navigation.relevantHotelParams.localizedName,
    country: a.presentation.subtitle,
    iata: a.entityId,
  }));

};