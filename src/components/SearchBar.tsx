import { useState, useEffect } from "react";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";
// import { fetchAirportsByQuery } from "../services/airportsAPI";      ////////////////////////////////Change for deploy
import { fetchAirportsByQuery } from "../services/DEV/DEVairportsAPI";      ////////////////////////////////Change for deploy
import type { Airport } from "../types";

interface SearchBarProps {
  label: string;
  onSelect: (airport: Airport | null) => void;
}

export default function SearchBar({ label, onSelect }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (inputValue.length >= 3) {
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
      options={options}
      getOptionLabel={(option) => `${option.name}`}
      loading={loading}
      onChange={(_, value) => onSelect(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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