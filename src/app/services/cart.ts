import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  cart:any[]=[];

  addToCart(product:any){
    this.cart.push(product);

  }
  getCartItems(){
    return this.cart;
  }
  clearCart(){
    this.cart=[];
  }
}
