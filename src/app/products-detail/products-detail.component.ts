import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductServiceService} from "../product-service.service";
import {TempDataServiceService} from "../temp-data-service.service";
import {Product} from "../Interfaces/product";

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  product: Product = {} as Product;
  constructor(private router: Router,
              private productService: ProductServiceService,
              private tempService: TempDataServiceService) {
  }

  ngOnInit() {
      this.product = this.tempService.currentProduct;
  }

  onAdd(){

  }

  onRemove(){

  }

}
