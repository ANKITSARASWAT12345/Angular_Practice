import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../services/product';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
  imports:[CommonModule]
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: Product,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.product = this.productService.getProductById(id);
    console.log('Fetched Product:', this.product);
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  }
}
