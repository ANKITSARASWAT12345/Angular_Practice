import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  private updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.updateLocalStorage();
  }

  getItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.updateLocalStorage();
  }

  removeItem(product: any) {
    this.cart = this.cart.filter(item => item.id !== product.id);
    this.updateLocalStorage();
  }

  updateQuantity(product: any, quantity: number) {
    const item = this.cart.find(p => p.id === product.id);
    if (item) {
      item.quantity = quantity;
      this.updateLocalStorage();
    }
  }
}
