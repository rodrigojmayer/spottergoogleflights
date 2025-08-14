import type { Airport } from "../../types";

import { getFalseFetchAirports } from "./DEVFetchAirports";

export const fetchAirportsByQuery = async (query: string): Promise<Airport[]> => {
    console.log("Airports query: ", query)

  const response = getFalseFetchAirports();
  return response.data.map((a) => ({
    skyId: a.skyId,
    name: a.presentation.suggestionTitle || a.presentation.title,
    city: a.navigation.relevantHotelParams.localizedName,
    country: a.presentation.subtitle,
    entityId: a.entityId,
  }));

};