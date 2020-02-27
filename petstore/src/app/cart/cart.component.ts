import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
total: number = 0;
  constructor(private cartService: CartService) { }

removeItem(i){
  this.items.splice(i,1);
}
clearCart(){
  this.items= [];
  return this.items;
};
  addMore(product){
    product.qtty ++;

  }
  addLess(product,i){
    if (product.qtty ==1){
      product.qtty --;
      this.items.splice(i,1)
      return this.items;
    }else {
      product.qtty --;
      return this.items;
    }
  }
  calcTotal() {
    let total = 0;
    for(let item of this.items){
      total = total + (item.qtty * item.price);
      // total += (item.qtty * item.price);
    }

    return total;
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
