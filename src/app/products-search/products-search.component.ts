import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {TempDataServiceService} from "../temp-data-service.service";
import {Product} from "../Interfaces/product";
import {first} from "rxjs";

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit{
  searchterm: string = '';
  products: Product[] = [];
  constructor(private productService: ProductServiceService,
              private tempService: TempDataServiceService,
              ) {
  }

  ngOnInit() {
    this.productService.getProducts().pipe(first()).subscribe(x =>
    {
      this.tempService.setCurrentProducts$(x.filter(prod => prod.title.toLowerCase().includes(this.searchterm.toLowerCase())));
    })
  }

  onSearch(){
    this.productService.getProducts().pipe(first()).subscribe(x =>
    {
      this.tempService.setCurrentProducts$(x.filter(prod => prod.title.toLowerCase().includes(this.searchterm.toLowerCase())));
    })

  }

}
