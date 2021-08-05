import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, products} from '../products';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addToCart(product: Product) {
    this.cartService.addtoCart(product);
    window.alert('Your product has been successfully added to the cart!');
  }
  product: Product|undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ){ }
  ngOnInit() {
    // get product id from the current route
    const routeParms = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParms.get('productId'));
    // find the product corresponding to tje productid passed
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}