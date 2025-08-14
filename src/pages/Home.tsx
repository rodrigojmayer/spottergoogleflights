import { useState } from "react";
import { 
    Box,
    Button,
    Card,
    MenuItem,
    Select,
    Typography,
    FormControl
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import type { Airport } from "../types";
import dayjs from "dayjs";

export default function Home() {
    
    const darkMode = false;

    const [departure, setDeparture] = useState<Airport | null>(null);
    const [destination, setDestination] = useState<Airport | null>(null);
    const [departureDate, setDepartureDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [returnDate, setReturnDate] = useState(dayjs().add(7, "day").format('YYYY-MM-DD'));
    const [tripType, setTripType] = useState("round");
    const [passengers, setPassengers] = useState(1);
    const [cabinClass, setCabinClass] = useState("economy");
    const navigate = useNavigate();
    
    const handleSearch = () => {
        if (departure && destination) {
        const params = new URLSearchParams({
            originSkyId: departure.skyId,
            destinationSkyId: destination.skyId,
            originEntityId: departure.entityId,
            destinationEntityId: destination.entityId,
            date: departureDate,
            returnDate: tripType === "round" ? returnDate : "",
            cabinClass,
            adults: passengers.toString(),
            sortBy: "best",
            currency: "USD",
            market: "en-US",
            countryCode: "US"
        });

        navigate(`/results?${params.toString()}`);
        }
    };


    return (
    <Box 
        sx={{
                // minWidth: "100%",
        }}
    >
        <TopBar />
        
        <Box 
            sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                px: "2%"
            }}
        >
            <Box
                sx={{
                    width: "95%",
                    height: "10px",
                    // backgroundImage: `url("/public/images/illustrations-for-web-and-v0-oj364whigbid1.webp")`,
                    // backgroundImage: `url("/public/images/flights_nc_4.svg")`,
                    backgroundImage: darkMode 
                    ? 'url("/public/images/flights_nc_dark_theme_4.svg")' 
                    : 'url("/public/images/flights_nc_4.svg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    pt: 40
                }}
            >
            <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                    px: 3,
                    position: "relative",
                    bottom: 60,
                    borderRadius: 2,
                    }}
                >
                    Flights
                </Typography>

            </Box>
            
            <Box>
                <Card
                    sx={{
                    p: 3,
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    alignItems: "center",
                    borderRadius: 3,
                    boxShadow: 2,
                    maxWidth: "1000px",
                    mt:3,
                    }}
                >
                    <FormControl size="small">
                    <Select value={tripType} onChange={(e) => setTripType(e.target.value)}>
                        <MenuItem value="round">Round trip</MenuItem>
                        <MenuItem value="oneway">One way</MenuItem>
                    </Select>
                    </FormControl>

                    <FormControl size="small">
                    <Select
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                    >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                        <MenuItem key={n} value={n}>
                            {n}
                        </MenuItem>
                        ))}
                    </Select>
                    </FormControl>

                    <FormControl size="small">
                    <Select value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
                        <MenuItem value="economy">Economy</MenuItem>
                        <MenuItem value="premium">Premium Economy</MenuItem>
                        <MenuItem value="business">Business</MenuItem>
                        <MenuItem value="first">First</MenuItem>
                    </Select>
                    </FormControl>

                    <SearchBar label="From" onSelect={(airport) => setDeparture(airport)} />
                    <SearchBar label="To" onSelect={(airport) => setDestination(airport)} />

                    <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    style={{
                        padding: "8px",
                        borderRadius: "6px",
                        border: "1px solid #ccc"
                    }}
                    />
                    {tripType === "round" && (
                    <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        style={{
                        padding: "8px",
                        borderRadius: "6px",
                        border: "1px solid #ccc"
                        }}
                    />
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ px: 4, py: 1.2, borderRadius: "30px" }}
                        disabled={!departure || !destination}
                        onClick={handleSearch}
                    >
                        <SearchIcon/>
                        Explore
                    </Button>
                </Card>
            </Box>
        </Box>
    </Box>
  );
}