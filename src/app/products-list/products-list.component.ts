import {Component, OnInit} from '@angular/core';
import {Product} from "../Interfaces/product";
import {ProductServiceService} from "../product-service.service";
import {TempDataServiceService} from "../temp-data-service.service";
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  cartValue: number = 0;
  private cartProducts: Product[] = []

  constructor(private productService: ProductServiceService,
              private tempService: TempDataServiceService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.productService.getProducts().pipe(first()).subscribe(x => this.products = x);
    this.tempService.getCurrentCart$().pipe(first()).subscribe(x => {
      if (x) {
        this.cartProducts = x;
        this.cartValue = 0;
        x.forEach(prod => this.cartValue += prod.price)
      }
    })
  }

  addToCart(product: Product) {
    this.cartProducts.push(product)
    this.cartValue += product.price;
    this.tempService.setCurrentCart$(this.cartProducts)
  }

  selectProduct(product: Product){
    this.tempService.currentProduct = product;
    this.router.navigate(['/product-detail'])
  }
}
