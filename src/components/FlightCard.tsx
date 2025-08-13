import { Card, CardContent, Typography } from "@mui/material";
import type { FlightItinerary } from "../types";

interface Props {
    flight: FlightItinerary;
}

export default function FlightCard({ flight }: Props) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6">{flight.id}</Typography>
                <Typography>Price: {flight.price}</Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>Legs:</Typography>
                {flight.legs.map((leg) => (
                    <Card key={leg.id} variant="outlined" sx={{ mb: 1, p: 1 }}>
                        <Typography>
                            Departure: {leg.departure} — Arrival: {leg.arrival}
                        </Typography>
                        <Typography>Duration: {leg.durationInMinutes} minutes</Typography>
                        <Typography>
                            Operating carriers: {leg.carriers.operating.map(c => c.name).join(", ")}
                        </Typography>
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
}

