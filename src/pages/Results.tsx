import { Box, Container, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { fetchFlightsByQuery } from "../services/flightsAPI";         ////////////////////////////////Change for deploy    
import { fetchFlightsByQuery } from "../services/DEV/DEVflightsAPI";      ////////////////////////////////Change for deploy

import FilterSidebar from "../components/FilterSidebar";
import FlightCard from "../components/FlightCard";
import type { FlightItinerary } from "../types";


export default function Results() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const originSkyId = query.get("originSkyId");
  const destinationSkyId = query.get("destinationSkyId");
  const [flights, setFlights] = useState<FlightItinerary[]>([]);
  
  useEffect(() => {
    const fetchFlights = async () => {
      if (originSkyId && destinationSkyId) {
        const data = await fetchFlightsByQuery(query);
        setFlights(data);
      }
    };
    fetchFlights();
  }, [originSkyId, destinationSkyId]);

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