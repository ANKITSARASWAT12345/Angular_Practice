// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../services/cart';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.html',
//   styleUrl:'./cart.css'
// })
// export class Cart implements OnInit {
//   cartItems: any[] = [];

//   constructor(private cartService:CartService) {}

//   ngOnInit() {
//     this.cartItems = this.cartService.getItems();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems(); 
  }
}
