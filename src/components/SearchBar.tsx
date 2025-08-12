import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";

export default function SearchBar() {
    const navigate = useNavigate();
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departure, setDeparture] = useState(dayjs().format('YYYY-MM-DD'));
    const [returnDate, setReturnDate] = useState(dayjs().add(7, "day").format('YYYY-MM-DD'));

    const handleSearch = () => {
        navigate("/results");
    };

    return (
        <Box display="flex" gap={2} flexWrap="wrap">
            <TextField label="Origin" value={origin} 
                onChange={(e) => setOrigin(e.target.value)} 
            />
            <TextField label="Destination" value={destination} 
                onChange={(e) => setDestination(e.target.value)} 
            />
            <TextField type="date" label="Departure" value={departure} 
                onChange={(e) => setDeparture(e.target.value)} slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField type="date" label="Return" value={returnDate} 
                onChange={(e) => setReturnDate(e.target.value)} slotProps={{ inputLabel: { shrink: true } }}
            />
            <Button variant="contained" onClick={handleSearch}>
                Search Flights
            </Button>
        </Box>
    )
}