import {Component, OnInit} from '@angular/core';
import {Product} from "../Interfaces/product";
import {ProductServiceService} from "../product-service.service";
import {TempDataServiceService} from "../temp-data-service.service";
import {Router} from "@angular/router";
import {first} from "rxjs";
import {OrderServiceService} from "../order-service.service";
import {Order} from "../Interfaces/order";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: Product[] = []
  private order: Order = {} as Order;
  constructor(private productService: ProductServiceService,
              private tempService: TempDataServiceService,
              private orderService: OrderServiceService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.tempService.getCurrentCart$().pipe(first()).subscribe(x => {
      if (x) {
        this.cartProducts = x;
      }
    })
  }

  selectProduct(product: Product){
    this.tempService.currentProduct = product;
    this.router.navigate(['/product-detail'])
  }

  checkout(){
    this.order.order_datetime = new Date().toString();
    this.order.user = this.tempService.currentUser
    this.order.products = this.cartProducts
    this.orderService.addOrder(this.order).subscribe()
    this.tempService.setCurrentCart$([])
  }
}
