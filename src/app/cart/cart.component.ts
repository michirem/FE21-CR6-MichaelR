import { Component, OnInit, DoCheck } from '@angular/core';
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
  cartTotalDiscounted: number = 0;

  constructor(private bookingService: BookingService) { }

  checkDiscount(): number {
    if (this.cartTotal > 200 && this.cartTotal < 500) {
      this.cartTotalDiscounted = this.cartTotal * 0.9;
    } else if (this.cartTotal > 500) {
      this.cartTotalDiscounted = this.cartTotal * 0.8;
    }
    return this.cartTotalDiscounted
  }

  ngOnInit(): void {
    this.cart = this.bookingService.getTripsCart();
    this.cartTotal = this.bookingService.getTotal();
}
  ngDoCheck(): void {
    this.checkDiscount();
  }
}