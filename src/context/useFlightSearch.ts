import { useContext } from "react";
import { FlightSearchContext } from "./FlightSearchContext";

export const useFlightSearch = () => {
  const context = useContext(FlightSearchContext);
  if (!context) throw new Error("useFlightSearch must be used within FlightSearchProvider");
  return context;
};