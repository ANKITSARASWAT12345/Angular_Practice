// src/app/checkout/checkout.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';
 // Adjust path if needed

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
  imports:[CommonModule]
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
