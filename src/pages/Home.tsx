import { 
    Box,
    Button,
    Typography,
    useTheme,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import FlightSearchPanel from "../components/FlightSearchPanel";
import { useFlightSearch } from "../context/useFlightSearch";

type HomeProps = {
  darkMode?: boolean; 
};
export default function Home({ darkMode }: HomeProps) {
    
    const theme = useTheme();
    const navigate = useNavigate();
    
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
                            // fontWeight="bold"
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
  handleSearch={handleSearch}
/>
                      
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
                                disabled={
                                    !departure ||
                                    !destination ||
                                    !departureDate ||
                                    (tripType === "round" && !returnDate)
                                }
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