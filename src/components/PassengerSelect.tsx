import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Typography,
  IconButton,
  Button,
  Input
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import type { Passengers } from "../types";

interface PassengerSelectProps {
    active: string | null;
    setActive: (value: string | null) => void;
    passengers: Passengers;
    setPassengers: Dispatch<SetStateAction<Passengers>>;
}

export default function PassengerSelect({
  active,
  setActive,
  passengers,
  setPassengers
}: PassengerSelectProps) {
  const [open, setOpen] = useState(false);

  const handleChange = (type: keyof typeof passengers, delta: number) => {
    setPassengers((prev: Passengers) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta)
    }));
  };

  return (
    <FormControl size="small" variant="standard" onClick={() => setTimeout(() => setActive("select2"), 1)}>
      <Select
        open={open}
        onOpen={() => {setOpen(true); setActive("select2")}}
        onClose={() => {setOpen(false); setActive(null)}}
        onClick={(e) => e.stopPropagation()} 
        value=""
        displayEmpty
        input={
          <Input
            sx={{
                bgcolor: active === "select2" ? "rgba(26,115,232,0.08)" : "transparent",
                color: active === "select2" ? "rgba(26, 115, 232, 1)" : "inherit",
                borderBottom: "2px solid rgba(0,0,0,0)",
                "&:before": { borderBottom: "2px solid rgba(0,0,0,0)" },
                "&:hover:not(.Mui-disabled):before": { borderBottom: "2px solid rgba(0,0,0,0)" },
                "&:after": { borderBottom: "2px solid #1976d2" },
                "&:active": { borderBottom: "2px solid #1976d2" },

            }}
          />
        }
        renderValue={() => (
            <Typography sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <PersonOutlineOutlinedIcon fontSize="small"/>
                {passengers.adults + passengers.children + passengers.infantsSeat + passengers.infantsLap}
            </Typography>
        )}
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
            gap:0
            }
          }
        }}
      >
        <MenuItem 
            disableRipple 
            sx={{ display: "block", cursor: "default", backgroundColor: "rgb(0,0,0,0)!important"  }}
            onClick={(e) => e.stopPropagation()} 
        >
          {[
            { label: "Adults", sub: "", key: "adults" },
            { label: "Children", sub: "Aged 2-11", key: "children" },
            { label: "Infants", sub: "In seat", key: "infantsSeat" },
            { label: "Infants", sub: "On lap", key: "infantsLap" }
          ].map(({ label, sub, key }) => (
            <Box
              key={key}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // py: 1
              }}
                onClick={(e) => e.stopPropagation()} 
            >
              <Box>
                <Typography>{label}</Typography>
                {sub && (
                  <Typography variant="caption" color="text.secondary">
                    {sub}
                  </Typography>
                )}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleChange(key as keyof typeof passengers, -1)
                    }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography>{passengers[key as keyof typeof passengers]}</Typography>
                <IconButton
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleChange(key as keyof typeof passengers, 1)
                    }}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2
            }}
          >
            <Button size="small" onClick={() => setPassengers({
              adults: 1, children: 0, infantsSeat: 0, infantsLap: 0
            })}>
              Cancel
            </Button>
            <Button size="small" variant="contained" onClick={() => setOpen(false)}>
              Done
            </Button>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}