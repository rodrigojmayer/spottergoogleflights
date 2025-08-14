import type { FlightItinerary } from "../../types";

import { getFalseFetchFlights } from "./DEVFetchFlights";

export const fetchFlightsByQuery = async (query: unknown): Promise<FlightItinerary[]> => {
        console.log("Flights query: ", query)


  const response = getFalseFetchFlights();
  return response.data.itineraries.map((a) => ({
    id: a.id,
    price: a.price,
    legs: a.legs,
  }));

};