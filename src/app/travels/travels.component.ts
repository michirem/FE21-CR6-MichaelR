import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { journey } from '../interfaces';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {

  trips: Array<journey> = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.trips = this.bookingService.getTrips();
  }

}
