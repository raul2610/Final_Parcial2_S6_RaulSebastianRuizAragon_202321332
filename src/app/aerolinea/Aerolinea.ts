import { Vuelo } from './Vuelo';

export class Aerolinea {
  id: string;
  airlineName: string;
  country: string;
  city: string;
  address: string;
  identityColor: string;
  slogan: string;
  flights: Vuelo[];

  constructor(
    id: string,
    airlineName: string,
    country: string,
    city: string,
    address: string,
    identityColor: string,
    slogan: string,
    flights: Vuelo[]
    ) {
    this.id = id;
    this.airlineName = airlineName;
    this.country = country;
    this.city = city;
    this.address = address;
    this.identityColor = identityColor;
    this.slogan = slogan;
    this.flights = flights.map((v: any) => new Vuelo(
      v.id,
      v.flightNumber,
      v.departureAirport,
      v.arrivalAirport,
      v.departureTime,
      v.arrivalTime,
      v.price,
      v.seatsAvailable,
      v.status,
      v.airlineId
    ));
  }
}