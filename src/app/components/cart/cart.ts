import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  imports: [CommonModule]
})
export class Cart implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getData(); // load cart on init
  }

  getData(): void {
    this.cartItems = this.cartService.getItems().map(item => ({
      ...item,
      quantity: typeof item.quantity === 'number' && item.quantity > 0 ? item.quantity : 1
    }));
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  increaseQuantity(item: any): void {
    item.quantity += 1;
    this.cartService.updateQuantity(item, item.quantity);
    this.getData();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.updateQuantity(item, item.quantity);
      this.getData();
    }
  }

  removeFromCart(itemToRemove: any): void {
    this.cartService.removeItem(itemToRemove);
    this.getData(); // refresh list after removing
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.getData();
  }

  proceedToCheckout(): void {
    if(this.cartItems.length==0){
      alert("cart is empty")
    }
    else{
    alert('Proceeding to checkout!');
   }
 }
}
