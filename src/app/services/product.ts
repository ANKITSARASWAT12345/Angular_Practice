import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  products=[
    {id:1,name:'laptop', price:50000},
    {id:2,name:'phone', price:20000},
    {id:1,name:'watch', price:4500},
  ];

  constructor(){}

    getAllProducts(){
      return this.products;
    }

    

    getProductById(id:Number){
      return this.products.find(product=>product.id===id);
    }
  
}
