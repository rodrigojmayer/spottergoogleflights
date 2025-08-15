import React, { createContext } from "react";
import { Dayjs } from "dayjs";
import type { Airport, Passengers } from "../types";


interface FlightSearchState {
  activeFlightOptionsBar: string | null;
  setActiveFlightOptionsBar: React.Dispatch<React.SetStateAction<string | null>>;
  tripType: string;
  setTripType: React.Dispatch<React.SetStateAction<string>>;
  passengers: Passengers;
  setPassengers: React.Dispatch<React.SetStateAction<Passengers>>;
  cabinClass: string;
  setCabinClass: React.Dispatch<React.SetStateAction<string>>;
  departure: Airport | null;
  setDeparture: (value: Airport | null) => void;
  destination: Airport | null;
  setDestination: (value: Airport | null) => void;
  departureDate: Dayjs | null;
  setDepartureDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  returnDate: Dayjs | null;
  setReturnDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export const FlightSearchContext = createContext<FlightSearchState | null>(null);
