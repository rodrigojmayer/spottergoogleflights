import { Box, Container, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { getFlights } from "../services/flightsAPI";
import FilterSidebar from "../components/FilterSidebar";
import FlightCard from "../components/FlightCard";
import type { Flight } from "../types";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Results() {
  const query = useQuery();
  const from = query.get("from");
  const to = query.get("to");
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      if (from && to) {
        // const data = await getFlights(from, to); // update your API function to accept airport IDs
        const data: Flight[] = [
            {
                id: 1,
                airline: "Delta",
                price: 250,
                duration: "3h 45m",
                stops: 0
            },
            {
                id: 2,
                airline: "United",
                price: 300,
                duration: "4h 10m",
                stops: 1
            },
            {
                id: 3,
                airline: "American Airlines",
                price: 280,
                duration: "3h 55m",
                stops: 0
            }
            ];
        setFlights(data);
      }
    };
    fetchFlights();
  }, [from, to]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Available Flights
      </Typography>
      <Box display="flex">
        <FilterSidebar />
        <Grid container spacing={2}>
          {flights.map((flight) => (
            <Grid  key={flight.id}>
              <FlightCard flight={flight} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}