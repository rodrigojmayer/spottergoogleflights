import { useState } from "react";
import { 
    Box,
    Button,
    Card,
    Typography,
    useTheme,
    // ThemeProvider, 
    // createTheme, 
    // CssBaseline
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import type { Airport, Passengers } from "../types";
import FlightOptionsBar from "../components/FlightOptionsBar";
import dayjs, { Dayjs } from "dayjs";
import FlightDatePicker from "../components/FlightDatePicker"; 

type HomeProps = {
  darkMode?: boolean; // optional
};
export default function Home({ darkMode }: HomeProps) {
    
    const theme = useTheme();
    // const [darkMode, setDarkMode] = useState(false);
    // const theme = createTheme({
    //     palette: {
    //         mode: darkMode ? "dark" : "light",
    //     },
    // });
    // const darkModeVAR= "light"

    const [activeFlightOptionsBar, setActiveFlightOptionsBar] = useState<string | null>(null);
    const [departure, setDeparture] = useState<Airport | null>(null);
    const [destination, setDestination] = useState<Airport | null>(null);
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
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
            date: dayjs(departureDate).format("YYYY-MM-DD"),
            returnDate: tripType === "round" && returnDate ? dayjs(returnDate).format("YYYY-MM-DD") : "",
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
        
        // <ThemeProvider theme={theme}>
        //     <CssBaseline />
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
                {/* <TopBar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
                
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
                            [theme.breakpoints.up("sm")]: {  
                                width: "70%",
                                minWidth: 0
                            },
                        }}
                    >
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                p: 1,
                                gap: 2,
                                flexWrap: "wrap",
                                borderRadius: "0px 0px 10px 10px",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                                width: "95%",
                                margin: "0",
                                borderTop: "none",
                                    pb:5,
                                [theme.breakpoints.up("sm")]: {  
                                    p: 3,
                                    pb:5,
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
                            <Box
                                sx={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 1 }}
                            >
                                <Box 
                                    sx= {{ display: "flex", flexWrap: "wrap", width: { xs: "100%", sm: "55%"  } }}
                                >
                                    <SearchBar label="From" onSelect={(airport) => setDeparture(airport)} />
                                    <SearchBar label="To" onSelect={(airport) => setDestination(airport)} />
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
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center", 
                                }}
                            >
                            <Button
                                variant="contained"
                                color="primary"
                                
                                sx={{ 
                                    display: "relative", 
                                    top: -20, 
                                    px: 4, 
                                    py: 1.2, 
                                    borderRadius: "30px", 
                                    maxWidth:"110px",
                                    "&.Mui-disabled": {
                                        opacity: 1,
                                        color: "rgba(53, 53, 53, 1)", 
                                        backgroundColor: "rgba(218, 218, 218, 1)", 
                                    },
                                }}
                                disabled={!departure || !destination}
                                onClick={handleSearch}
                            >
                                <SearchIcon/>
                                Explore
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        // </ThemeProvider>
    );
}