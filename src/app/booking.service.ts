import { Injectable } from '@angular/core';
import { trips } from './tripdata';
import { journey } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  trips: Array<journey> = [];

  constructor() {
    this.trips = trips;
  }

  getTrips() : Array<journey> {
    return this.trips;
  }
}
