import type { Dispatch, SetStateAction } from "react";
import { Box, FormControl, Select, MenuItem, Input, Typography } from "@mui/material";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import PassengerSelect from "./PassengerSelect"; 
import type { Passengers } from "../types";

interface FlightOptionsBarProps {
  active: string | null;
  setActive: (value: string | null) => void;
  tripType: string;
  setTripType: (value: string) => void;
  passengers: Passengers;
  setPassengers: Dispatch<SetStateAction<Passengers>>;
  cabinClass: string;
  setCabinClass: (value: string) => void;
}

export default function FlightOptionsBar({
  active,
  setActive,
  tripType,
  setTripType,
  passengers,
  setPassengers,
  cabinClass,
  setCabinClass
}: FlightOptionsBarProps) {
  return (
    <Box
        id="flightOptionsBar"
        sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 2,
            width: "100%",
            minWidth: 0,
        }}
        
    >
        <FormControl size="small" variant="standard" onClick={() => setTimeout(() => setActive("select1"), 1)}>
            <Select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            onOpen={() => setActive("select1")}
            input={
                <Input
                sx={{
                    bgcolor: active === "select1" ? "rgba(26,115,232,0.08)" : "transparent",
                    color: active === "select1" ? "rgba(26, 115, 232, 1)" : "inherit",
                    borderBottom: "2px solid rgba(0,0,0,0)",
                    "&:before": { borderBottom: "2px solid rgba(0,0,0,0)" },
                    "&:hover:not(.Mui-disabled):before": { borderBottom: "2px solid rgba(0,0,0,0)" },
                    "&:after": { borderBottom: "2px solid #1976d2" },
                    "&:active": { borderBottom: "2px solid #1976d2" },
                }}
                />
            }
            >
            <MenuItem value="round">
                <Typography sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <SyncAltIcon fontSize="small" /> Round trip
                </Typography>
            </MenuItem>
            <MenuItem value="oneway">
                <Typography sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <TrendingFlatIcon fontSize="small" /> One way
                </Typography>
            </MenuItem>
            </Select>
        </FormControl>
        
        <PassengerSelect 
            active={active}
            setActive={setActive}
            passengers={passengers}
            setPassengers={setPassengers}
         />

        <FormControl 
            size="small" 
            variant="standard" 
            sx={{
                flex: "0 0 auto", 
                
            }} 
            onClick={() => setTimeout(() => setActive("select3"), 1)}
        >
            <Select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                onOpen={() => setActive("select3")}
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom", 
                        horizontal: "left"
                    },
                        transformOrigin: {
                        vertical: "top", 
                        horizontal: "left"
                    },
                    PaperProps: {
                        sx: {
                            maxHeight: 200 
                        }
                    }
                }}
            input={
                <Input
                    sx={{
                        bgcolor: active === "select3" ? "rgba(26,115,232,0.08)" : "transparent",
                        color: active === "select3" ? "rgba(26, 115, 232, 1)" : "inherit",
                        borderBottom: "2px solid rgba(0,0,0,0)",
                        "&:before": { borderBottom: "2px solid rgba(0,0,0,0)" },
                        "&:hover:not(.Mui-disabled):before": { borderBottom: "2px solid rgba(0,0,0,0)" },
                        "&:after": { borderBottom: "2px solid #1976d2" },
                        "&:active": { borderBottom: "2px solid #1976d2" },
                    }}
                />
            }
            >
          <MenuItem value="economy">Economy</MenuItem>
          <MenuItem value="premium">Premium Economy</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="first">First</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}