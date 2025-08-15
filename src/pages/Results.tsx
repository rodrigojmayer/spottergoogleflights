import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { fetchFlightsByQuery } from "../services/flightsAPI";         // Used for deploy    
import { fetchFlightsByQuery } from "../services/DEV/DEVflightsAPI";      // Used for developing and testing
import FlightCard from "../components/FlightCard";
import type { FlightItinerary } from "../types";
import FlightSearchPanel from "../components/FlightSearchPanel";
import { useFlightSearch } from "../context/useFlightSearch";


type FilterConfig = {
  label: string;
  options: string[];
};

export default function Results() {
  const theme = useTheme();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const originSkyId = query.get("originSkyId");
  const destinationSkyId = query.get("destinationSkyId");
  const [flights, setFlights] = useState<FlightItinerary[]>([]);
  const [sortOption, setSortOption] = useState("best");

  const filters : FilterConfig[] = [
    { label: "Stops", options: ["Non-stop", "1 stop", "2+ stops"] },
    { label: "Airlines", options: ["Delta", "United", "American"] },
    { label: "Bags", options: ["Carry-on", "1 Checked", "2+ Checked"] },
    { label: "Price", options: ["Lowest", "Highest"] },
    { label: "Times", options: ["Morning", "Afternoon", "Evening"] },
    { label: "Emissions", options: ["Low", "Medium", "High"] },
    { label: "Connecting airports", options: ["JFK", "LAX", "ORD"] },
    { label: "Duration", options: ["< 3h", "3–6h", "> 6h"] },
  ];

  const {
    activeFlightOptionsBar, setActiveFlightOptionsBar,
    departure, setDeparture,
    destination, setDestination,
    departureDate, setDepartureDate,
    returnDate, setReturnDate,
    tripType, setTripType,
    passengers, setPassengers,
    cabinClass, setCabinClass
  } = useFlightSearch();

  
  useEffect(() => {
    const fetchFlights = async () => {
      if (originSkyId && destinationSkyId) {
        const data = await fetchFlightsByQuery(query);
        console.log("data flights: ", data)
        setFlights(data);
      }
    };
    fetchFlights();
  }, [originSkyId, destinationSkyId]);

   const [filterValues, setFilterValues] = useState<Record<string, string>>(
    filters.reduce((acc, f) => ({ ...acc, [f.label]: "" }), {})
  );

  const handleChange = (label: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
         <FlightSearchPanel
          activeFlightOptionsBar={activeFlightOptionsBar}
          setActiveFlightOptionsBar={setActiveFlightOptionsBar}
          tripType={tripType}
          setTripType={setTripType}
          passengers={passengers}
          setPassengers={setPassengers}
          cabinClass={cabinClass}
          setCabinClass={setCabinClass}
          departure={departure}
          setDeparture={setDeparture}
          destination={destination}
          setDestination={setDestination}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
        />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
        }}
      >

         <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "flex-start",
        my: 2,
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "90%",
        },
      }}
    >
      {filters.map((filter) => (
        <FormControl
          key={filter.label}
          size="small"
          sx={{
            minWidth: 90, 
            borderRadius: "20px", // pill-like shape
            "& .MuiOutlinedInput-root": {
              paddingRight: "24px !important", // adjust padding for arrow
            },
            "& .MuiSelect-select": {
              padding: "4px 12px", // smaller height
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #ddd", // thin light border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc", // hover border
            },
          }}
        >
          <Select
            displayEmpty
            value={filterValues[filter.label]}
            onChange={(e) => handleChange(filter.label, e.target.value)}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "#777" }}>{filter.label}</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            {filter.options.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 2,
            width: "100%",
            [theme.breakpoints.up("md")]: {
              width: "90%"
            },
          }}
        >
          <ToggleButtonGroup
            value={sortOption}
            exclusive
            sx={{height:1, width: "100%",}}
            onChange={(e, newValue) => newValue && setSortOption(newValue)}
          >
            <ToggleButton 
              value="best" 
              sx={{width: "50%",}}
            >
              Best
            </ToggleButton>
            <ToggleButton value="cheapest"
              sx={{width: "50%",}}
            >
              Cheapest from {flights[0]?.price.formatted  ?? "—"}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* 3️⃣ Flight Results */}
        <Grid container spacing={2} >
          {flights.map((flight) => (
            <Grid key={flight.id} sx={{
            margin: "auto",
            width: "100%",
            [theme.breakpoints.up("md")]: {
              width: "90%"
            },
          }}>
              <FlightCard flight={flight} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}