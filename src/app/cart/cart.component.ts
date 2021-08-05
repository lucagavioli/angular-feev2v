import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  // empty the Cart
  emptyCart() {
    this.items= this.cartService.clearCart();
    window.alert('Cart successfully emptied');
  }
  constructor(
    private cartService: CartService
  ) { }

}