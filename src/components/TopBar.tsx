import { Box, Button } from "@mui/material";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ExploreIcon from "@mui/icons-material/Explore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export default function TopBar() {

    const darkMode = false;

    const [active, setActive] = React.useState("Flights");

    const buttons = [
        { label: "Travel", icon: <TravelExploreIcon /> },
        { label: "Explore", icon: <ExploreIcon /> },
        { label: "Flights", icon: <FlightIcon /> },
        { label: "Hotels", icon: <HotelIcon /> },
        { label: "Vacation rentals", icon: <HomeIcon /> },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: 2,
                borderBottom: "1px solid #e0e0e0",
                backgroundColor: "#fff",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
            <IconButton sx={{ "&:focus": {outline: "none"},}} >
                <MenuIcon/>
            </IconButton>
            <img
                src="/public/images/googlelogo.png" 
                alt="Logo"
                style={{ height: 70, cursor: "pointer"}}
            />
            <Stack direction="row" spacing={1}>
                {buttons.map((btn) => (
                    <Button
                    key={btn.label}
                    startIcon={btn.icon}
                    onClick={() => setActive(btn.label)}
                    variant={active === btn.label ? "contained" : "outlined"}
                    sx={{
                        borderRadius: "999px",
                        textTransform: "none",
                        fontWeight: 400,
                        bgcolor: active === btn.label ? "rgba(26,115,232,0.08)" : "transparent",
                        color: active === btn.label ? "rgba(26, 115, 232, 1)" : "inherit",
                        borderColor: active === btn.label ? "transparent" : "rgba(0,0,0,0.23)",
                        "&:hover": {
                            bgcolor:
                                active === btn.label
                                ? "rgba(0,115,232,0.12)"
                                : "rgba(26, 115, 232, 0.1)",
                                borderColor:
                                active === btn.label ? "transparent" : "rgba(0,0,0,0.23)",
                        },
                        "&:focus": {
                            outline: "none",
                            bgcolor:
                                active === btn.label
                                ? "rgba(26,115,232,0.08)"
                                : "rgba(26,115,232, 0.17)",
                        },
                        "&.Mui-focusVisible": {
                            outline: "none",
                            boxShadow: "none",
                        },
                        "& .MuiButton-startIcon": {
                            color: "#1a73e8", // blue icon, text stays black
                        },
                    }}
                    >
                    {btn.label}
                    </Button>
                ))}
                </Stack>
        </Box>

            <Box sx={{ 
                // display: "flex", 
                // alignItems: "center", 
                // marginRight: 3 , margin: 1
            }}>
                    <IconButton sx={{marginRight: 2, "&:focus": { outline: "none"} }} >
                        <WbSunnyOutlinedIcon sx={{display: darkMode?"block":"none" }}/>
                        <DarkModeIcon sx={{display: darkMode?"none":"block" }}/>
                    </IconButton>
                    <IconButton sx={{marginRight: 2, "&:focus": { outline: "none"} }} >
                        <AppsIcon/>
                    </IconButton>
            <Button 
                variant="outlined" 
                sx={{
                    padding: "0", 
                    borderRadius:100, 
                    backgroundColor: "green", 
                    color: "white", 
                    marginRight: 3, 
                    minWidth: "32px", 
                    height: "32px", 
                    "&:focus": { outline: "none"} 
                }}>
                    R
                </Button>
        </Box>
        </Box>
    );
}