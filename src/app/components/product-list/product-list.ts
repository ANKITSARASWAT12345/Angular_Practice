import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Product } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./product-list.html' ,
   styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: Product, private cartService:CartService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  addToCart(product:any){

    this.cartService.addToCart(product);
    alert(`${product.name} added to the cart`);
    console.log(product);
    

  }
}
