import { Component, OnInit, DoCheck } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  count: number;

  constructor(private bookingService: BookingService) {
    this.count = this.counter();
  }

  counter(): number {
    return this.bookingService.itemCount();
  }
  
  ngOnInit(): void {
    // console.log(this.cartLength);
  }

  ngDoCheck(): void {
    this.count = this.counter();
  }

}
