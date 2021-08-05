import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, products} from '../products'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product|undefined;
  constructor(
    private route: ActivatedRoute,
    ){ }
  ngOnInit() {
    // get product id from the current route
    const routeParms = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParms.get('productId'));
    // find the product corresponding to tje productid passed
    console.warn('ppp');
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}