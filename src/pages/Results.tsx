import { Box, Container, Typography, Grid } from '@mui/material';
import { getFlights } from '../services/flightsAPI';
import FilterSidebar from '../components/FilterSidebar';
import FlightCard from '../components/FlightCard';

export default function Results() {
    const flights = getFlights();

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>Available Flights</Typography>
            <Box display="flex">
                <FilterSidebar />
                <Grid container spacing={2}>
                    {flights.map((flight) => (
                        <Grid key={flight.id}>
                            <FlightCard flight={flight} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}