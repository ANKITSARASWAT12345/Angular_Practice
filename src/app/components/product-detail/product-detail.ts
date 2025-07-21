import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  product:any;
  constructor(
    private route:ActivatedRoute,
    private productService:Product,
    private cartService:CartService
  ){}

  ngOnInit(): void {
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.product=this.productService.getProductById(id);

  }

  addToCart(){
    this.cartService.addToCart(this.product);
    alert("Added to Cart!")
  }
}
