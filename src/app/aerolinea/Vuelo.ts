export class Vuelo {
  id: string;
  departureAirport: string;
  departureCountry: string;
  departureCity: string;
  arrivalAirport: string;
  arrivalCountry: string;
  arrivalCity: string;
  departureTime: string;
  flightDuration: number;
  image: string;

  constructor(
    id: string,
    departureAirport: string,
    departureCountry: string,
    departureCity: string,
    arrivalAirport: string,
    arrivalCountry: string,
    arrivalCity: string,
    departureTime: string,
    flightDuration: number,
    image: string
    ) {
    this.id = id;
    this.departureAirport = departureAirport;
    this.departureCountry = departureCountry;
    this.departureCity = departureCity;
    this.arrivalAirport = arrivalAirport;
    this.arrivalCountry = arrivalCountry;
    this.arrivalCity = arrivalCity;
    this.departureTime = departureTime;
    this.flightDuration = flightDuration;
    this.image = image;
  }
}
