import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../services/product';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NgFor, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
   allProducts:any=[];
   constructor(private productService:Product){}

   ngOnInit(): void {
       this.allProducts=this.productService.getAllProducts();
       
   }
}
