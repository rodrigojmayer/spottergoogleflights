import { Container, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import type { Airport } from "../types";

export default function Home() {
  const [departure, setDeparture] = useState<Airport | null>(null);
  const [destination, setDestination] = useState<Airport | null>(null);
  const navigate = useNavigate();

    const handleDepartureSelect = (airport: Airport | null) => {
        console.log("Selected departure:", airport);
        setDeparture(airport); // <-- update state
    };

    const handleDestinationSelect = (airport: Airport | null) => {
        console.log("Selected destination:", airport);
        setDestination(airport);
    };
    const handleSearch = () => {
        if (departure && destination) {
            // encode airport IDs in the URL
            navigate(`/results?from=${departure.id}&to=${destination.id}`);
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Welcome to Spotter Flights
            </Typography>
            <SearchBar label="Departure" onSelect={handleDepartureSelect} />
            <SearchBar label="Destination" onSelect={handleDestinationSelect} />
            <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={handleSearch}
                    disabled={!departure || !destination}
                >
                Search Flights
            </Button>
        </Container>
    );
}