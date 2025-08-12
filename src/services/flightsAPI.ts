import type { Flight } from '../types';

export const getFlights = (): Flight[] => {
    return [
        { id: 1, airline: 'Airline A', price: 200, duration: '2h 30m', stops: 0 },
        { id: 2, airline: 'Airline B', price: 150, duration: '3h 15m', stops: 1 },
        { id: 3, airline: 'Airline C', price: 300, duration: '1h 45m', stops: 0 },
    ]
}