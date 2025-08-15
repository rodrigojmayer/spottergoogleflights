import { Box, Card, CardContent, Typography } from "@mui/material";
import type { FlightItinerary } from "../types";
import { useFlightSearch } from "../context/useFlightSearch";

interface Props {
    flight: FlightItinerary;
}

export default function FlightCard({ flight }: Props) {
      const {
        tripType, 
      } = useFlightSearch();

    const leg = flight.legs[0];
    console.log("flight: ", flight)
    const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    };
    return (
        <Card variant="outlined" sx={{ mb: 2, borderRadius: 3 }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
            
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {leg.carriers?.marketing?.[0]?.logoUrl && (
                        <Box
                        component="img"
                        src={leg.carriers.marketing[0].logoUrl}
                        alt={leg.carriers.marketing[0].name}
                        sx={{ width: 40, height: 40, borderRadius: 1 }}
                        />
                    )}

                    <Box>
                        <Typography variant="h6">
                        {formatTime(leg.departure)} – {formatTime(leg.arrival)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {leg.carriers?.marketing?.map(c => c.name).join(", ")}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ textAlign: "right" }}>
                <Typography variant="body2" color="text.secondary">
                    {Math.floor(leg.durationInMinutes / 60)} hr {leg.durationInMinutes % 60} min · {leg.stopCount === 0 ? "Nonstop" : `${leg.stopCount} stop${leg.stopCount > 1 ? "s" : ""}`}
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                    <Typography variant="h6">${Math.round(flight.price.raw + Math.floor(Math.random() * 100))}</Typography>
                    {tripType === "round" && (
                        <Typography variant="body2" color="text.secondary">round trip</Typography>
                    )} 
                </Box>
            </CardContent>
        </Card>
    );
}

