import React, { useState } from "react";
import { Dayjs } from "dayjs";
import type { Airport, Passengers } from "../types";
import { FlightSearchContext } from "./FlightSearchContext";


export const FlightSearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeFlightOptionsBar, setActiveFlightOptionsBar] = useState<string | null>(null);
    const [tripType, setTripType] = useState("round");
    const [passengers, setPassengers] = useState<Passengers>({ adults: 1, children: 0, infantsSeat: 0, infantsLap:0 });
    const [cabinClass, setCabinClass] = useState("economy");
    const [departure, setDeparture] = useState<Airport | null>(null);
    const [destination, setDestination] = useState<Airport | null>(null);
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  
    return (
      <FlightSearchContext.Provider
        value={{
          activeFlightOptionsBar, setActiveFlightOptionsBar,
          tripType, setTripType,
          passengers, setPassengers,
          cabinClass, setCabinClass,
          departure, setDeparture,
          destination, setDestination,
          departureDate, setDepartureDate,
          returnDate, setReturnDate
        }}
      >
        {children}
      </FlightSearchContext.Provider>
    );
};