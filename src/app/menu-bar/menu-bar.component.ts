import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {TempDataServiceService} from "../temp-data-service.service";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  cartValue: string = "$0.00";

  constructor(private productService: ProductServiceService,
              private tempService: TempDataServiceService,
  ) {
  }

  ngOnInit() {
    this.tempService.getCurrentCart$().subscribe(x => {
      if (x) {
        let cartValue = 0;
        x.forEach(prod => cartValue += prod.price)
        this.cartValue = `\$${cartValue.toFixed(2)}`;
      }
    })
  }
}
