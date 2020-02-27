import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items =[];
  constructor() { }

  addtoCart(product){
    if(product.qtty == 0){
      product.qtty++;
      this.items.push(product);
    }else {
      for(let item of this.items){
        (item.name == product.name) ? item.qtty++ : null ;
      }
    }

  };

  getItems(){
    return this.items;
  };

}

