import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  // empty the Cart
  emptyCart() {
    this.items = this.cartService.clearCart();
    window.alert('Cart successfully emptied');
  }
  //
  onSubmit(): void {
    // process checkout
    this.emptyCart();
    console.warn('Your order has been submitted!', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
