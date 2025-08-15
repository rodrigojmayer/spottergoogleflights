import { useState } from "react";
import { 
    Box,
    Button,
    Card,
    Typography,
    useTheme,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import type { Airport, Passengers } from "../types";
import dayjs from "dayjs";
import FlightOptionsBar from "../components/FlightOptionsBar";

export default function Home() {
    
    const theme = useTheme();
    const darkMode = false;

    const [activeFlightOptionsBar, setActiveFlightOptionsBar] = useState<string | null>(null);
    const [departure, setDeparture] = useState<Airport | null>(null);
    const [destination, setDestination] = useState<Airport | null>(null);
    const [departureDate, setDepartureDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [returnDate, setReturnDate] = useState(dayjs().add(7, "day").format('YYYY-MM-DD'));
    const [tripType, setTripType] = useState("round");
    const [passengers, setPassengers] = useState<Passengers>({
        adults: 1,
        children: 0,
        infantsSeat: 0,
        infantsLap: 0
    });
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
        onClick={() => setActiveFlightOptionsBar(null)}
        sx={{
            display: "grid",
            gridTemplateColumns: "1fr", 
            [theme.breakpoints.up("md")]: {
                gridTemplateColumns: "repeat(1, 1fr)",
            },
        }}
    >
        <TopBar />
        
        <Box 
            sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                [theme.breakpoints.up("sm")]: {
                    px: "2%",
                }
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    minHeight: "200px", 
                    backgroundImage: darkMode 
                    ? 'url("/public/images/flights_nc_dark_theme_4.svg")' 
                    : 'url("/public/images/flights_nc_4.svg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    pt: 0,
                    [theme.breakpoints.up("sm")]: {
                        width: "95%",
                        minHeight: "30px",
                    pt: 36,
                    },
                    [theme.breakpoints.up("md")]: {
                        minHeight: "10px",
                        height: "10px",
                    },
                }}
            >
            <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                        px: 3,
                        position: "relative",
                        top: 150,
                        borderRadius: 2,
                        [theme.breakpoints.up("sm")]: {  
                            top: -90, 
                        },
                        [theme.breakpoints.up("md")]: {
                            
                        },
                    }}
                >
                    Flights
                </Typography>

            </Box>
            
            <Box 
            
                    sx={{
                        width: "100%",
                        maxWidth: "100%",
                        [theme.breakpoints.up("sm")]: {  
                            maxWidth: "60%",
                            minWidth: 0
                        },
                    }}
            >
                <Card
                    sx={{
                    display: "flex",
                    p: 1,
                    gap: 2,
                    flexWrap: "wrap",
                    alignItems: "center",
                    borderRadius: "0px 0px 10px 10px",
                     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                    width: "100%",
                    margin: "0",
                    borderTop: "none",

                    [theme.breakpoints.up("sm")]: {  
                        p: 3,
                    width: "90%",
                    boxShadow: 2,
                    borderRadius: 3,
                    },
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