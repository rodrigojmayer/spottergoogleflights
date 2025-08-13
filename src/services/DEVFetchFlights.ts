import type { FetchFlightsResponse } from '../types';

export const getFalseFetchFlights = (): FetchFlightsResponse => {
    return {
    "status": true,
    "timestamp": 1755107535212,
    "data": {
        "context": {
        "status": "incomplete",
        "sessionId": "KLUv_WAwAB0HAKZQMyGgqQ2PGcAAF1xjeG7J0u5eVLCknSilpDinPXskVORoay4pACoAKgCxbTJjm3CtjqrJISgMLwaX2fptT46rpbu1ya4-00NNT4QOSiBFA1gWKNwSt4oquqdN3_ct96xq1VkrIAdloyyKAIP1gEQkEya2drHVOuWUsNXlB6ltSuj8-4GvjWB5AIz3Pw4fP25tbmJx8_t1_ksOoToHHdBqAgtDCrOPBwmEYnBX7qm27TQmM-xkbW0-9864rIxVYjQajkPj1D8GE3vfK9vrli0GAOZQTKpIXIP2hg22WLzAmUID",
        "totalResults": 10
        },
        "itineraries": [
            {
                "id": "13554-2508140935--32132-0-12712-2508141245|12712-2508212200--32132-0-13554-2508221015",
                "price": {
                "raw": 777.66,
                "formatted": "$778",
                "pricingOptionId": "O7L5YZ-tJHAE"
                },
                "legs": [
                {
                    "id": "13554-2508140935--32132-0-12712-2508141245",
                    "origin": {
                        "id": "LHR",
                        "entityId": "95565050",
                        "name": "London Heathrow",
                        "displayCode": "LHR",
                        "city": "London",
                        "country": "United Kingdom",
                        "isHighlighted": false
                    },
                    "destination": {
                        "id": "JFK",
                        "entityId": "95565058",
                        "name": "New York John F. Kennedy",
                        "displayCode": "JFK",
                        "city": "New York",
                        "country": "United States",
                        "isHighlighted": false
                    },
                    "durationInMinutes": 490,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-14T09:35:00",
                    "arrival": "2025-08-14T12:45:00",
                    "timeDeltaInDays": 0,
                    "carriers": {
                        "marketing": [
                            {
                            "id": -32132,
                            "alternateId": "KL",
                            "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
                            "name": "KLM"
                            }
                        ],
                        "operating": [
                            {
                            "id": -31697,
                            "alternateId": "VS",
                            "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                            "name": "Virgin Atlantic"
                            }
                        ],
                        "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "13554-12712-2508140935-2508141245--32132",
                        "origin": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "destination": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "departure": "2025-08-14T09:35:00",
                        "arrival": "2025-08-14T12:45:00",
                        "durationInMinutes": 490,
                        "flightNumber": "2502",
                        "marketingCarrier": {
                        "id": -32132,
                        "name": "KLM",
                        "alternateId": "KL",
                        "allianceId": -31998,
                        "displayCode": "KL"
                        },
                        "operatingCarrier": {
                        "id": -31697,
                        "name": "Virgin Atlantic",
                        "alternateId": "VS",
                        "allianceId": -31998,
                        "displayCode": "VS"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                },
                {
                    "id": "12712-2508212200--32132-0-13554-2508221015",
                    "origin": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 435,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-21T22:00:00",
                    "arrival": "2025-08-22T10:15:00",
                    "timeDeltaInDays": 1,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32132,
                        "alternateId": "KL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
                        "name": "KLM"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "12712-13554-2508212200-2508221015--32132",
                        "origin": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "destination": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "departure": "2025-08-21T22:00:00",
                        "arrival": "2025-08-22T10:15:00",
                        "durationInMinutes": 435,
                        "flightNumber": "6103",
                        "marketingCarrier": {
                        "id": -32132,
                        "name": "KLM",
                        "alternateId": "KL",
                        "allianceId": -31998,
                        "displayCode": "KL"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
                },
                "eco": {
                "ecoContenderDelta": 28.674889
                },
                "fareAttributes": {},
                "tags": [
                "third_cheapest",
                "third_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.999
            },
            {
                "id": "13554-2508141055--32677-0-12712-2508141405|12712-2508212200--32677-0-13554-2508221015",
                "price": {
                "raw": 777.66,
                "formatted": "$778",
                "pricingOptionId": "3pELgmx0iYCV"
                },
                "legs": [
                {
                    "id": "13554-2508141055--32677-0-12712-2508141405",
                    "origin": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 490,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-14T10:55:00",
                    "arrival": "2025-08-14T14:05:00",
                    "timeDeltaInDays": 0,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32677,
                        "alternateId": "AF",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
                        "name": "Air France"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "13554-12712-2508141055-2508141405--32677",
                        "origin": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "destination": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "departure": "2025-08-14T10:55:00",
                        "arrival": "2025-08-14T14:05:00",
                        "durationInMinutes": 490,
                        "flightNumber": "3666",
                        "marketingCarrier": {
                        "id": -32677,
                        "name": "Air France",
                        "alternateId": "AF",
                        "allianceId": -31998,
                        "displayCode": "AF"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                },
                {
                    "id": "12712-2508212200--32677-0-13554-2508221015",
                    "origin": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 435,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-21T22:00:00",
                    "arrival": "2025-08-22T10:15:00",
                    "timeDeltaInDays": 1,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32677,
                        "alternateId": "AF",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
                        "name": "Air France"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "12712-13554-2508212200-2508221015--32677",
                        "origin": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "destination": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "departure": "2025-08-21T22:00:00",
                        "arrival": "2025-08-22T10:15:00",
                        "durationInMinutes": 435,
                        "flightNumber": "3662",
                        "marketingCarrier": {
                        "id": -32677,
                        "name": "Air France",
                        "alternateId": "AF",
                        "allianceId": -31998,
                        "displayCode": "AF"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
                },
                "eco": {
                "ecoContenderDelta": 20.700497
                },
                "fareAttributes": {},
                "tags": [
                "third_cheapest",
                "third_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.909838
            },
            {
                "id": "13554-2508141055--32132-0-12712-2508141405|12712-2508212200--32132-0-13554-2508221015",
                "price": {
                "raw": 777.66,
                "formatted": "$778",
                "pricingOptionId": "fKsNHMEq-LyB"
                },
                "legs": [
                {
                    "id": "13554-2508141055--32132-0-12712-2508141405",
                    "origin": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 490,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-14T10:55:00",
                    "arrival": "2025-08-14T14:05:00",
                    "timeDeltaInDays": 0,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32132,
                        "alternateId": "KL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
                        "name": "KLM"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "13554-12712-2508141055-2508141405--32132",
                        "origin": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "destination": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "departure": "2025-08-14T10:55:00",
                        "arrival": "2025-08-14T14:05:00",
                        "durationInMinutes": 490,
                        "flightNumber": "6006",
                        "marketingCarrier": {
                        "id": -32132,
                        "name": "KLM",
                        "alternateId": "KL",
                        "allianceId": -31998,
                        "displayCode": "KL"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                },
                {
                    "id": "12712-2508212200--32132-0-13554-2508221015",
                    "origin": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 435,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-21T22:00:00",
                    "arrival": "2025-08-22T10:15:00",
                    "timeDeltaInDays": 1,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32132,
                        "alternateId": "KL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
                        "name": "KLM"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "12712-13554-2508212200-2508221015--32132",
                        "origin": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "destination": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "departure": "2025-08-21T22:00:00",
                        "arrival": "2025-08-22T10:15:00",
                        "durationInMinutes": 435,
                        "flightNumber": "6103",
                        "marketingCarrier": {
                        "id": -32132,
                        "name": "KLM",
                        "alternateId": "KL",
                        "allianceId": -31998,
                        "displayCode": "KL"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
                },
                "eco": {
                "ecoContenderDelta": 20.700497
                },
                "fareAttributes": {},
                "tags": [
                "third_cheapest",
                "third_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.908683
            },
            {
                "id": "13554-2508140935--32677-0-12712-2508141245|12712-2508212200--32677-0-13554-2508221015",
                "price": {
                "raw": 777.66,
                "formatted": "$778",
                "pricingOptionId": "t-hVS_ntLHyk"
                },
                "legs": [
                {
                    "id": "13554-2508140935--32677-0-12712-2508141245",
                    "origin": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 490,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-14T09:35:00",
                    "arrival": "2025-08-14T12:45:00",
                    "timeDeltaInDays": 0,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32677,
                        "alternateId": "AF",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
                        "name": "Air France"
                        }
                    ],
                    "operating": [
                        {
                        "id": -31697,
                        "alternateId": "VS",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                        "name": "Virgin Atlantic"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "13554-12712-2508140935-2508141245--32677",
                        "origin": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "destination": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "departure": "2025-08-14T09:35:00",
                        "arrival": "2025-08-14T12:45:00",
                        "durationInMinutes": 490,
                        "flightNumber": "6752",
                        "marketingCarrier": {
                        "id": -32677,
                        "name": "Air France",
                        "alternateId": "AF",
                        "allianceId": -31998,
                        "displayCode": "AF"
                        },
                        "operatingCarrier": {
                        "id": -31697,
                        "name": "Virgin Atlantic",
                        "alternateId": "VS",
                        "allianceId": -31998,
                        "displayCode": "VS"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                },
                {
                    "id": "12712-2508212200--32677-0-13554-2508221015",
                    "origin": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 435,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-21T22:00:00",
                    "arrival": "2025-08-22T10:15:00",
                    "timeDeltaInDays": 1,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32677,
                        "alternateId": "AF",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
                        "name": "Air France"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "12712-13554-2508212200-2508221015--32677",
                        "origin": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "destination": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "departure": "2025-08-21T22:00:00",
                        "arrival": "2025-08-22T10:15:00",
                        "durationInMinutes": 435,
                        "flightNumber": "3662",
                        "marketingCarrier": {
                        "id": -32677,
                        "name": "Air France",
                        "alternateId": "AF",
                        "allianceId": -31998,
                        "displayCode": "AF"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
                },
                "eco": {
                "ecoContenderDelta": 28.674889
                },
                "fareAttributes": {},
                "tags": [
                "third_cheapest",
                "third_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.907371
            },
            {
                "id": "13554-2508141255--32677-0-12712-2508141600|12712-2508212200--32677-0-13554-2508221015",
                "price": {
                "raw": 777.66,
                "formatted": "$778",
                "pricingOptionId": "riWhB0W_vliN"
                },
                "legs": [
                {
                    "id": "13554-2508141255--32677-0-12712-2508141600",
                    "origin": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 485,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-14T12:55:00",
                    "arrival": "2025-08-14T16:00:00",
                    "timeDeltaInDays": 0,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32677,
                        "alternateId": "AF",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
                        "name": "Air France"
                        }
                    ],
                    "operating": [
                        {
                        "id": -31697,
                        "alternateId": "VS",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                        "name": "Virgin Atlantic"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "13554-12712-2508141255-2508141600--32677",
                        "origin": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "destination": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "departure": "2025-08-14T12:55:00",
                        "arrival": "2025-08-14T16:00:00",
                        "durationInMinutes": 485,
                        "flightNumber": "6758",
                        "marketingCarrier": {
                        "id": -32677,
                        "name": "Air France",
                        "alternateId": "AF",
                        "allianceId": -31998,
                        "displayCode": "AF"
                        },
                        "operatingCarrier": {
                        "id": -31697,
                        "name": "Virgin Atlantic",
                        "alternateId": "VS",
                        "allianceId": -31998,
                        "displayCode": "VS"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                },
                {
                    "id": "12712-2508212200--32677-0-13554-2508221015",
                    "origin": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 435,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-21T22:00:00",
                    "arrival": "2025-08-22T10:15:00",
                    "timeDeltaInDays": 1,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32677,
                        "alternateId": "AF",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
                        "name": "Air France"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "12712-13554-2508212200-2508221015--32677",
                        "origin": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "destination": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "departure": "2025-08-21T22:00:00",
                        "arrival": "2025-08-22T10:15:00",
                        "durationInMinutes": 435,
                        "flightNumber": "3662",
                        "marketingCarrier": {
                        "id": -32677,
                        "name": "Air France",
                        "alternateId": "AF",
                        "allianceId": -31998,
                        "displayCode": "AF"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
                },
                "eco": {
                "ecoContenderDelta": 27.171803
                },
                "fareAttributes": {},
                "tags": [
                "second_cheapest",
                "second_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.907037
            },
            {
                "id": "13554-2508141225--32677-0-12712-2508141530|12712-2508212200--32677-0-13554-2508221015",
                "price": {
                "raw": 777.66,
                "formatted": "$778",
                "pricingOptionId": "hYMRznXBqVyz"
                },
                "legs": [
                {
                    "id": "13554-2508141225--32677-0-12712-2508141530",
                    "origin": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 485,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-14T12:25:00",
                    "arrival": "2025-08-14T15:30:00",
                    "timeDeltaInDays": 0,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32677,
                        "alternateId": "AF",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
                        "name": "Air France"
                        }
                    ],
                    "operating": [
                        {
                        "id": -31697,
                        "alternateId": "VS",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                        "name": "Virgin Atlantic"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "13554-12712-2508141225-2508141530--32677",
                        "origin": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "destination": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "departure": "2025-08-14T12:25:00",
                        "arrival": "2025-08-14T15:30:00",
                        "durationInMinutes": 485,
                        "flightNumber": "9663",
                        "marketingCarrier": {
                        "id": -32677,
                        "name": "Air France",
                        "alternateId": "AF",
                        "allianceId": -31998,
                        "displayCode": "AF"
                        },
                        "operatingCarrier": {
                        "id": -31697,
                        "name": "Virgin Atlantic",
                        "alternateId": "VS",
                        "allianceId": -31998,
                        "displayCode": "VS"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                },
                {
                    "id": "12712-2508212200--32677-0-13554-2508221015",
                    "origin": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 435,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-21T22:00:00",
                    "arrival": "2025-08-22T10:15:00",
                    "timeDeltaInDays": 1,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32677,
                        "alternateId": "AF",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
                        "name": "Air France"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "12712-13554-2508212200-2508221015--32677",
                        "origin": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "destination": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "departure": "2025-08-21T22:00:00",
                        "arrival": "2025-08-22T10:15:00",
                        "durationInMinutes": 435,
                        "flightNumber": "3662",
                        "marketingCarrier": {
                        "id": -32677,
                        "name": "Air France",
                        "alternateId": "AF",
                        "allianceId": -31998,
                        "displayCode": "AF"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
                },
                "eco": {
                "ecoContenderDelta": 28.674889
                },
                "fareAttributes": {},
                "tags": [
                "second_cheapest",
                "second_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.907037
            },
            {
                "id": "13554-2508141225--32132-0-12712-2508141530|12712-2508212200--32132-0-13554-2508221015",
                "price": {
                "raw": 777.66,
                "formatted": "$778",
                "pricingOptionId": "UZ22yTdafcg7"
                },
                "legs": [
                {
                    "id": "13554-2508141225--32132-0-12712-2508141530",
                    "origin": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 485,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-14T12:25:00",
                    "arrival": "2025-08-14T15:30:00",
                    "timeDeltaInDays": 0,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32132,
                        "alternateId": "KL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
                        "name": "KLM"
                        }
                    ],
                    "operating": [
                        {
                        "id": -31697,
                        "alternateId": "VS",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                        "name": "Virgin Atlantic"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "13554-12712-2508141225-2508141530--32132",
                        "origin": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "destination": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "departure": "2025-08-14T12:25:00",
                        "arrival": "2025-08-14T15:30:00",
                        "durationInMinutes": 485,
                        "flightNumber": "4830",
                        "marketingCarrier": {
                        "id": -32132,
                        "name": "KLM",
                        "alternateId": "KL",
                        "allianceId": -31998,
                        "displayCode": "KL"
                        },
                        "operatingCarrier": {
                        "id": -31697,
                        "name": "Virgin Atlantic",
                        "alternateId": "VS",
                        "allianceId": -31998,
                        "displayCode": "VS"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                },
                {
                    "id": "12712-2508212200--32132-0-13554-2508221015",
                    "origin": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 435,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-21T22:00:00",
                    "arrival": "2025-08-22T10:15:00",
                    "timeDeltaInDays": 1,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32132,
                        "alternateId": "KL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
                        "name": "KLM"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "12712-13554-2508212200-2508221015--32132",
                        "origin": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "destination": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "departure": "2025-08-21T22:00:00",
                        "arrival": "2025-08-22T10:15:00",
                        "durationInMinutes": 435,
                        "flightNumber": "6103",
                        "marketingCarrier": {
                        "id": -32132,
                        "name": "KLM",
                        "alternateId": "KL",
                        "allianceId": -31998,
                        "displayCode": "KL"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
                },
                "eco": {
                "ecoContenderDelta": 28.674889
                },
                "fareAttributes": {},
                "tags": [
                "second_cheapest",
                "second_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.905418
            },
            {
                "id": "13554-2508141255--32132-0-12712-2508141600|12712-2508212200--32132-0-13554-2508221015",
                "price": {
                "raw": 777.66,
                "formatted": "$778",
                "pricingOptionId": "z0ieH_B4Pxbt"
                },
                "legs": [
                {
                    "id": "13554-2508141255--32132-0-12712-2508141600",
                    "origin": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 485,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-14T12:55:00",
                    "arrival": "2025-08-14T16:00:00",
                    "timeDeltaInDays": 0,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32132,
                        "alternateId": "KL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
                        "name": "KLM"
                        }
                    ],
                    "operating": [
                        {
                        "id": -31697,
                        "alternateId": "VS",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/VS.png",
                        "name": "Virgin Atlantic"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "13554-12712-2508141255-2508141600--32132",
                        "origin": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "destination": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "departure": "2025-08-14T12:55:00",
                        "arrival": "2025-08-14T16:00:00",
                        "durationInMinutes": 485,
                        "flightNumber": "2504",
                        "marketingCarrier": {
                        "id": -32132,
                        "name": "KLM",
                        "alternateId": "KL",
                        "allianceId": -31998,
                        "displayCode": "KL"
                        },
                        "operatingCarrier": {
                        "id": -31697,
                        "name": "Virgin Atlantic",
                        "alternateId": "VS",
                        "allianceId": -31998,
                        "displayCode": "VS"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                },
                {
                    "id": "12712-2508212200--32132-0-13554-2508221015",
                    "origin": {
                    "id": "JFK",
                    "entityId": "95565058",
                    "name": "New York John F. Kennedy",
                    "displayCode": "JFK",
                    "city": "New York",
                    "country": "United States",
                    "isHighlighted": false
                    },
                    "destination": {
                    "id": "LHR",
                    "entityId": "95565050",
                    "name": "London Heathrow",
                    "displayCode": "LHR",
                    "city": "London",
                    "country": "United Kingdom",
                    "isHighlighted": false
                    },
                    "durationInMinutes": 435,
                    "stopCount": 0,
                    "isSmallestStops": false,
                    "departure": "2025-08-21T22:00:00",
                    "arrival": "2025-08-22T10:15:00",
                    "timeDeltaInDays": 1,
                    "carriers": {
                    "marketing": [
                        {
                        "id": -32132,
                        "alternateId": "KL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
                        "name": "KLM"
                        }
                    ],
                    "operating": [
                        {
                        "id": -32385,
                        "alternateId": "DL",
                        "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/DL.png",
                        "name": "Delta"
                        }
                    ],
                    "operationType": "not_operated"
                    },
                    "segments": [
                    {
                        "id": "12712-13554-2508212200-2508221015--32132",
                        "origin": {
                        "flightPlaceId": "JFK",
                        "displayCode": "JFK",
                        "parent": {
                            "flightPlaceId": "NYCA",
                            "displayCode": "NYC",
                            "name": "New York",
                            "type": "City"
                        },
                        "name": "New York John F. Kennedy",
                        "type": "Airport",
                        "country": "United States"
                        },
                        "destination": {
                        "flightPlaceId": "LHR",
                        "displayCode": "LHR",
                        "parent": {
                            "flightPlaceId": "LOND",
                            "displayCode": "LON",
                            "name": "London",
                            "type": "City"
                        },
                        "name": "London Heathrow",
                        "type": "Airport",
                        "country": "United Kingdom"
                        },
                        "departure": "2025-08-21T22:00:00",
                        "arrival": "2025-08-22T10:15:00",
                        "durationInMinutes": 435,
                        "flightNumber": "6103",
                        "marketingCarrier": {
                        "id": -32132,
                        "name": "KLM",
                        "alternateId": "KL",
                        "allianceId": -31998,
                        "displayCode": "KL"
                        },
                        "operatingCarrier": {
                        "id": -32385,
                        "name": "Delta",
                        "alternateId": "DL",
                        "allianceId": -31998,
                        "displayCode": "DL"
                        },
                        "transportMode": "TRANSPORT_MODE_FLIGHT"
                    }
                    ]
                }
                ],
                "isSelfTransfer": false,
                "isProtectedSelfTransfer": false,
                "farePolicy": {
                "isChangeAllowed": false,
                "isPartiallyChangeable": false,
                "isCancellationAllowed": false,
                "isPartiallyRefundable": false
                },
                "eco": {
                "ecoContenderDelta": 27.171803
                },
                "fareAttributes": {},
                "tags": [
                "second_cheapest",
                "second_shortest"
                ],
                "isMashUp": false,
                "hasFlexibleOptions": false,
                "score": 0.905418
            }
        ],
        "messages": [],
        "filterStats": {
        "duration": {
            "min": 470,
            "max": 490,
            "multiCityMin": 905,
            "multiCityMax": 925
        },
        "total": 10,
        "hasCityOpenJaw": false,
        "multipleCarriers": {
            "minPrice": "",
            "rawMinPrice": null
        },
        "airports": [
            {
            "city": "London",
            "airports": [
                {
                "id": "LHR",
                "entityId": "95565050",
                "name": "London Heathrow"
                }
            ]
            },
            {
            "city": "New York",
            "airports": [
                {
                "id": "JFK",
                "entityId": "95565058",
                "name": "New York John F. Kennedy"
                }
            ]
            }
        ],
        "carriers": [
            {
            "id": -32677,
            "alternateId": "AF",
            "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
            "name": "Air France",
            "minPrice": "$778",
            "allianceId": -31998
            },
            {
            "id": -32132,
            "alternateId": "KL",
            "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/KL.png",
            "name": "KLM",
            "minPrice": "$778",
            "allianceId": -31998
            }
        ],
        "stopPrices": {
            "direct": {
            "isPresent": true,
            "formattedPrice": "$778",
            "rawPrice": 778
            },
            "one": {
            "isPresent": false
            },
            "twoOrMore": {
            "isPresent": false
            }
        },
        "alliances": [
            {
            "id": -31998,
            "name": "SkyTeam"
            }
        ]
        },
        "flightsSessionId": "de501df0-f2c6-43ac-93e6-c84f3764d736",
        "destinationImageUrl": "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg"
    }
    }
}