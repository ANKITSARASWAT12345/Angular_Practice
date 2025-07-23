import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './components/home/home';

import {  ProductListComponent } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';
import { CheckoutComponent } from './components/checkout/checkout';
import { Navbar } from './components/navbar/navbar';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { ProductDetailComponent } from './components/product-detail/product-detail';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    Home,
  ProductDetailComponent,
    ProductListComponent,
    Cart,
   Navbar,
    CheckoutComponent,
    RouterModule,
    Login,
    Signup
  ],

 templateUrl:'./app.html'
 
})
export class AppComponent {}
