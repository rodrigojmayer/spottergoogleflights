import { Container, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Welcome to Spotter Google Flights
            </Typography>
            <SearchBar />
        </Container>
    );
}