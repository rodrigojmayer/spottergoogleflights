import {useState} from "react";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

interface FlightDatePickerProps {
    tripType: string;
    departureDate: Dayjs | null;
    setDepartureDate: (date: Dayjs | null) => void;
    returnDate: Dayjs | null;
    setReturnDate: (date: Dayjs | null) => void;
}

export default function FlightDatePicker({
    tripType,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
}: FlightDatePickerProps) {
    const [openDepartureDate, setOpenDepartureDate] = useState(false);
    const [openReturnDate, setOpenReturnDate] = useState(false);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: "flex", gap: 0 }}>
                <DatePicker
                    label="Departure"
                    value={departureDate}
                    open={openDepartureDate}
                    onOpen={() => setOpenDepartureDate(true)}
                    onClose={() => setOpenDepartureDate(false)}
                    onChange={(newValue) => {
                    setDepartureDate(newValue);
                    if (returnDate && newValue && returnDate.isBefore(newValue)) {
                        setReturnDate(null);
                    }
                    }}
                    disablePast
                    format="ddd, MMM D"
                    slotProps={{
                        textField: {
                            variant: "outlined",
                            onClick: () => setOpenDepartureDate(true),
                        },
                        popper: {
                            modifiers: [
                                { name: "offset", options: { offset: [0, -50] } },
                                { name: "preventOverflow", options: { padding: 8 } },
                            ],
                            sx: {
                            "& .MuiPaper-root": {
                                maxHeight: 510,
                                minWidth: 280,
                            },
                            },
                        },
                    }}
                />

                {tripType === "round" && (
                    <DatePicker
                        label="Return"
                        value={returnDate}
                        open={openReturnDate}
                        onOpen={() => setOpenReturnDate(true)}
                        onClose={() => setOpenReturnDate(false)}
                        onChange={(newValue) => setReturnDate(newValue)}
                        disablePast
                        minDate={departureDate || undefined}
                        format="ddd, MMM D"
                        slotProps={{
                            textField: {
                            variant: "outlined",
                            onClick: () => setOpenReturnDate(true),
                            },
                            popper: {
                            modifiers: [
                                { name: "offset", options: { offset: [0, -50] } },
                                { name: "preventOverflow", options: { padding: 8 } },
                            ],
                            sx: {
                                "& .MuiPaper-root": {
                                maxHeight: 510,
                                minWidth: 280,
                                },
                            },
                            },
                        }}
                    />
                )}
            </Box>
        </LocalizationProvider>
    );
}