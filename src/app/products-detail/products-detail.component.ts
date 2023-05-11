import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductServiceService} from "../product-service.service";
import {TempDataServiceService} from "../temp-data-service.service";
import {Product} from "../Interfaces/product";
import {Location} from "@angular/common";
import {first} from "rxjs";

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  product: Product = {} as Product;
  cartProducts: Product[] = [];
  constructor(private router: Router,
              private productService: ProductServiceService,
              private tempService: TempDataServiceService,
              private location: Location) {
  }

  ngOnInit() {
    this.product = this.tempService.currentProduct;
    this.tempService.getCurrentCart$().pipe(first()).subscribe(x => {
      if (x) {
        this.cartProducts = x;
      }
    })
  }

  onAdd(){
    this.cartProducts.push(this.product);
    this.tempService.setCurrentCart$(this.cartProducts)
  }

  onRemove(){
    let i: number =this.cartProducts.findIndex(x => x.title === this.product.title && x.description === this.product.description);
    if (i > -1) this.cartProducts.splice(i,1);
    this.tempService.setCurrentCart$(this.cartProducts)
  }

  goBack(){
    this.location.back();
  }

}
