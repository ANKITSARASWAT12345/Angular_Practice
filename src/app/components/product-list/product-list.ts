import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Product } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./product-list.html' ,
   styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
