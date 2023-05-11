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
  private cartProducts: Product[] = []

  constructor(private productService: ProductServiceService,
              private tempService: TempDataServiceService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.tempService.getCurrentProducts$().subscribe(x => {if(x) this.products = x});
    this.tempService.getCurrentCart$().pipe(first()).subscribe(x => {
      if (x) {
        this.cartProducts = x;
      }
    })
  }

  addToCart(product: Product) {
    this.cartProducts.push(product)
    this.tempService.setCurrentCart$(this.cartProducts)
  }

  selectProduct(product: Product){
    this.tempService.currentProduct = product;
    this.router.navigate(['/product-detail'])
  }
}
