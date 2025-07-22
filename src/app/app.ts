import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { ProductDetail } from './components/product-detail/product-detail';
import {  ProductListComponent } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';
import { CheckoutComponent } from './components/checkout/checkout';
import { Navbar } from './components/navbar/navbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    Home,
    ProductDetail,
    ProductListComponent,
    Cart,
   Navbar,
    CheckoutComponent,
    RouterModule
  ],

 templateUrl:'./app.html'
 
})
export class AppComponent {}
