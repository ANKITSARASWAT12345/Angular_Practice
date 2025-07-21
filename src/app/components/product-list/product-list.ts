import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Product } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Products</h2>
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} - ₹{{ product.price }}
        <a [routerLink]="['/product', product.id]">View</a>
      </li>
    </ul>
  `
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
