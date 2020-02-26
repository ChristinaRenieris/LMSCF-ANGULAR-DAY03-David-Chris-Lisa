import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [{
  path:"", component: HomePageComponent 
},{
  path: 'productList', component: ProductListComponent
},{
  path: 'products/:productId', component: ProductDetailsComponent
},{
  path: 'whateverWewant', component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
