import { Injectable } from '@angular/core';
import { trips } from './tripdata';
import { journey } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  trips: Array<journey> = [];
  cart: Array<journey> = [];

  constructor() {
    this.trips = trips;
  }

  getTrips() : Array<journey> {
    return this.trips;
  }

  getTripsCart(): Array<journey> {
    return this.cart;
  }

  addTrip(trip: journey): void {
    this.cart.push(trip);
  }

  clearCart(): void {
    this.cart = [];
  }

  itemCount(): number {
    return this.cart.length;
  }

  getTotal() : number {
    return this.cart.reduce((acc, ele) => acc + ele.price, 0);
  }

}
