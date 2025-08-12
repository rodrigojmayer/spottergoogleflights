import { Box, Slider, Typography } from '@mui/material';
import { useState } from 'react';

export default function FilterSidebar() {
    const [priceRange, setPriceRange] = useState<number[]>([0, 500]);

    return (
        <Box width={250} p={2}>
            <Typography variant="subtitle1">
                Price Range
            </Typography>
            <Slider
                value={priceRange}
                onChange={(_, value) => setPriceRange(value as number[])}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
            />
        </Box>
    );
}