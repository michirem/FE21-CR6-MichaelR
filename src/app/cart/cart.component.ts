import { Component, OnInit } from '@angular/core';
import { journey } from '../interfaces';
import { BookingService } from '../booking.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Array<journey> = [];
  cartTotal: number = 0;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.cart = this.bookingService.getTripsCart();
    this.cartTotal = this.bookingService.getTotal();
}
}