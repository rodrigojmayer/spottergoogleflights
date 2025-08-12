import { Card, CardContent, Typography } from "@mui/material";
import type { Flight } from "../types";

interface Props {
    flight: Flight;
}

export default function FlightCard({ flight }: Props) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6">{flight.airline}</Typography>
                <Typography>Price: ${flight.price}</Typography>
                <Typography>Duration: {flight.duration}</Typography>
                <Typography>Stops: {flight.stops}</Typography>
            </CardContent>
        </Card>
    );
}