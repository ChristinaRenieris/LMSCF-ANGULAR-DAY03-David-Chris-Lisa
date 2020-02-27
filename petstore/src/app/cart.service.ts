import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items =[];
  constructor() { }

  addtoCart(product){
this.items.push(product);
  };
  
  getItems(){
    return this.items;
  };

  clearCart(){
    this.items= [];
    return this.items;
  };
  addMore(a){
    a.qtty ++;
  }
}
