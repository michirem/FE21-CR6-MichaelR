import { Component, OnInit } from '@angular/core';
import { journey } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent implements OnInit {

  oneTrip: journey;
  
  constructor(private route: ActivatedRoute, private bookingService: BookingService) {
    this.oneTrip = this.getTripDetails();
  }

  ngOnInit(): void {
    this.oneTrip = this.getTripDetails();
  }

  getTripDetails() : journey {
    let index: number = 0;
    console.table(this.route.paramMap);
    this.route.paramMap.subscribe(params => {index = parseInt(params.get('travelId') || "")});
    return this.bookingService.getTrips()[index];
  }

  addToCart(): void {
    this.bookingService.addTrip(this.oneTrip);
  }
}
