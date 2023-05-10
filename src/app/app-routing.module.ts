import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductsDetailComponent} from "./products-detail/products-detail.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrderHistoryComponent} from "./order-history/order-history.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'product-detail', component: ProductsDetailComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'orders', component: OrderHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
