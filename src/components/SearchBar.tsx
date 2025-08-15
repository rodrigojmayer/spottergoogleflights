import { useState, useEffect } from "react";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";
// import { fetchAirportsByQuery } from "../services/airportsAPI";      // Used for deploy
import { fetchAirportsByQuery } from "../services/DEV/DEVairportsAPI";      // Used for developing and testing
import type { Airport } from "../types";

interface SearchBarProps {
  label: string;
  input: string | undefined;
  onSelect: (airport: Airport | null) => void;
}

export default function SearchBar({ label, input, onSelect }: SearchBarProps) {

  const [inputValue, setInputValue] = useState(input || "");
  const [options, setOptions] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setInputValue(input || "");
  }, [input]);
  useEffect(() => {
    const handler = setTimeout(async () => {
      if (inputValue?.length >= 3) {
        setLoading(true);
        try {
          const results = await fetchAirportsByQuery(inputValue);
          setOptions(results);
        } finally {
          setLoading(false);
        }
      } else {
        setOptions([]);
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [inputValue]);
return (
    <Autocomplete
     value={options.find((opt) => opt.name === input) || null} // 🔹 Controlled selected
      options={options}
      getOptionLabel={(option) => `${option.name}`}
      loading={loading}
      sx={{ width: { xs: "50%" } }}
      onChange={(_, value) => onSelect(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}