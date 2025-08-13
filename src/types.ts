export interface Flight {
    id: number;
    airline: string;
    price: number;
    duration: string;
    stops: number;
}

export interface Airport {
    id: string;
    name: string;
    city: string;
    country: string;
    iata: string;
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