import axios from "axios";
import type { FlightItinerary } from "../types";

const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

export const fetchFlightsByQuery = async (query: URLSearchParams): Promise<FlightItinerary[]> => {
  console.log("query: ", query)
  // const queryString = query.toString();
  const params = Object.fromEntries(query.entries());
  // console.log("queryString: ", queryString);
  const response = await axios.get(
   
    `https://${RAPIDAPI_HOST}/api/v2/flights/searchFlights`,
    {
      params: { 
        ...params, 
        locale: "en-US" 
      },
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
      },
    }
  );
  console.log("response:", response) 
  const itineraries = response.data.data?.itineraries ?? [];
  return itineraries.map((a: FlightItinerary) => ({
    id: a.id,
    price: a.price,
    legs: a.legs,
  }));
  // return [{
  //   id: "id",
  //   price: "a.price.formatted",
  //   legs: [{
  //     id: "a.legs", 
  //     durationInMinutes: 34,
  //     departure: "string",
  //     arrival:  "string",
  //     carriers: {
  //         operating: [{
  //           logoUrl: "string",
  //           name: "string"
  //           }]
  //     }
  //   }]
  // }]

};