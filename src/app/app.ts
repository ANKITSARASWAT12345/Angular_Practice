import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { ProductDetail } from './components/product-detail/product-detail';
import {  ProductListComponent } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';
import { CheckoutComponent } from './components/checkout/checkout';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    Home,
    ProductDetail,
    ProductListComponent,
    Cart,
   
    CheckoutComponent
  ],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/products">Products</a> |
      <a routerLink="/cart">Cart</a> |
      <a routerLink="/checkout">Checkout</a>
    </nav>
    <hr />
    <router-outlet />
  `
})
export class AppComponent {}
