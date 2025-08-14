export interface Flight {
    id: number;
    airline: string;
    price: number;
    duration: string;
    stops: number;
}
export interface CarriersOptions {
    logoUrl: string;
    name: string;
}

export interface Leg {
    id: string,
    durationInMinutes: number;
    departure: string;
    arrival:  string;
    carriers: {
        operating: CarriersOptions[],
        marketing: CarriersOptions[]
    };
}

export interface FlightItinerary {
    id: string;
    price: {
        raw: number;
        formatted: string;
        pricingOptionId: string;
    };
    legs: Leg[];
}

export interface Airport {
    skyId: string;
    name: string;
    city: string;
    country: string;
    entityId: string;
}

export interface RawAirport {
    skyId: string;
    presentation: {
        title: string;
        subtitle: string;
        suggestionTitle: string;
    };
    navigation: {
        relevantHotelParams: {
            localizedName: string;
        }
    }
    entityId: string;
}






export interface FalseRawAirport {
  skyId: string;
  entityId: string;
  presentation: {
    title: string;
    suggestionTitle: string;
    subtitle: string;
  };
  navigation: {
    entityId: string;
    entityType: string;
    localizedName: string;
    relevantFlightParams: {
      skyId: string;
      entityId: string;
      flightPlaceType: string;
      localizedName: string;
    };
    relevantHotelParams: {
      entityId: string;
      entityType: string;
      localizedName: string;
    };
  };
}

export interface FetchAirportsResponse {
  status: boolean;
  timestamp: number; // or `bigint` if your runtime supports it and you truly need it
  data: FalseRawAirport[];
}

export type FetchFlightsResponse = {
  status: boolean;
  timestamp: number;
  data: {
    context: {
      status: string;
      sessionId: string;
      totalResults: number;
    };
    itineraries: Array<{
      id: string;
      price: {
        raw: number;
        formatted: string;
        pricingOptionId: string;
      };
      legs: Array<{
        id: string;
        origin: {
          id: string;
          entityId: string;
          name: string;
          displayCode: string;
          city: string;
          country: string;
          isHighlighted: boolean;
        };
        destination: {
          id: string;
          entityId: string;
          name: string;
          displayCode: string;
          city: string;
          country: string;
          isHighlighted: boolean;
        };
        durationInMinutes: number;
        stopCount: number;
        isSmallestStops: boolean;
        departure: string;
        arrival: string;
        timeDeltaInDays: number;
        carriers: {
          marketing: Array<{
            id: number;
            alternateId: string;
            logoUrl: string;
            name: string;
          }>;
          operating: Array<{
            id: number;
            alternateId: string;
            logoUrl: string;
            name: string;
          }>;
          operationType: string;
        };
        segments: Array<{
          id: string;
          origin: {
            flightPlaceId: string;
            displayCode: string;
            parent: {
              flightPlaceId: string;
              displayCode: string;
              name: string;
              type: string;
            };
            name: string;
            type: string;
            country: string;
          };
          destination: {
            flightPlaceId: string;
            displayCode: string;
            parent: {
              flightPlaceId: string;
              displayCode: string;
              name: string;
              type: string;
            };
            name: string;
            type: string;
            country: string;
          };
          departure: string;
          arrival: string;
          durationInMinutes: number;
          flightNumber: string;
          marketingCarrier: {
            id: number;
            name: string;
            alternateId: string;
            allianceId: number;
            displayCode: string;
          };
          operatingCarrier: {
            id: number;
            name: string;
            alternateId: string;
            allianceId: number;
            displayCode: string;
          };
          transportMode: string;
        }>;
      }>;
      isSelfTransfer: boolean;
      isProtectedSelfTransfer: boolean;
      farePolicy: {
        isChangeAllowed: boolean;
        isPartiallyChangeable: boolean;
        isCancellationAllowed: boolean;
        isPartiallyRefundable: boolean;
      };
      eco: {
        ecoContenderDelta: number;
      };
      fareAttributes: Record<string, unknown>;
      tags: string[];
      isMashUp: boolean;
      hasFlexibleOptions: boolean;
      score: number;
    }>;
    messages: unknown[];
    filterStats: {
      duration: {
        min: number;
        max: number;
        multiCityMin: number;
        multiCityMax: number;
      };
      total: number;
      hasCityOpenJaw: boolean;
      multipleCarriers: {
        minPrice: string;
        rawMinPrice: number | null;
      };
      airports: Array<{
        city: string;
        airports: Array<{
          id: string;
          entityId: string;
          name: string;
        }>;
      }>;
      carriers: Array<{
        id: number;
        alternateId: string;
        logoUrl: string;
        name: string;
        minPrice: string;
        allianceId: number;
      }>;
      stopPrices: {
        direct: { isPresent: boolean; formattedPrice: string; rawPrice: number };
        one: { isPresent: boolean };
        twoOrMore: { isPresent: boolean };
      };
      alliances: Array<{ id: number; name: string }>;
    };
    flightsSessionId: string;
    destinationImageUrl: string;
  };
};
