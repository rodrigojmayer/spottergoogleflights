import { Box, Card } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
// import SearchIcon from "@mui/icons-material/Search";
import FlightOptionsBar from "./FlightOptionsBar";
import SearchBar from "./SearchBar";
import FlightDatePicker from "./FlightDatePicker";
import type { Airport, Passengers } from "../types";
import { Dayjs } from "dayjs";

type FlightSearchPanelProps = {
  activeFlightOptionsBar: string | null;
  setActiveFlightOptionsBar: (value: string | null) => void;
  tripType: string;
  setTripType: (value: string) => void;
  passengers: Passengers;
  setPassengers: Dispatch<SetStateAction<Passengers>>;
  cabinClass: string;
  setCabinClass: (value: string) => void;
  departure: Airport | null;
  setDeparture: (value: Airport | null) => void;
  destination: Airport | null;
  setDestination: (value: Airport | null) => void;
  departureDate: Dayjs | null;
  setDepartureDate: (value: Dayjs | null) => void;
  returnDate: Dayjs | null;
  setReturnDate: (value: Dayjs | null) => void;
  handleSearch?: () => void ;
};

export default function FlightSearchPanel({
  activeFlightOptionsBar,
  setActiveFlightOptionsBar,
  tripType,
  setTripType,
  passengers,
  setPassengers,
  cabinClass,
  setCabinClass,
  departure,
  setDeparture,
  destination,
  setDestination,
  departureDate,
  setDepartureDate,
  returnDate,
  setReturnDate,
//   handleSearch,
}: FlightSearchPanelProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 1,
        gap: 2,
        flexWrap: "wrap",
        borderRadius: { xs: "0px 0px 10px 10px", sm: 3 },
        boxShadow: { xs: "0px 4px 6px rgba(0, 0, 0, 0.5)", sm: 2 },
        width: { xs: "95%", sm: "90%" },
        pb: 5,
        margin: "0 auto",
      }}
    >
      <FlightOptionsBar
        active={activeFlightOptionsBar}
        setActive={setActiveFlightOptionsBar}
        tripType={tripType}
        setTripType={setTripType}
        passengers={passengers}
        setPassengers={setPassengers}
        cabinClass={cabinClass}
        setCabinClass={setCabinClass}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: { xs: "100%", sm: "55%" },
          }}
        >
          <SearchBar label="From" input={departure?.name} onSelect={setDeparture} />
          <SearchBar label="To" input={destination?.name} onSelect={setDestination} />
        </Box>
        <FlightDatePicker
          tripType={tripType}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
        />
      </Box>

    </Card>
  );
}