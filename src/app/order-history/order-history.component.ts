import {Component, OnInit} from '@angular/core';
import {TempDataServiceService} from "../temp-data-service.service";
import {first} from "rxjs";
import {Order} from "../Interfaces/order";
import {OrderServiceService} from "../order-service.service";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderServiceService,
              private tempService: TempDataServiceService,
  ) {
  }

  ngOnInit() {
    this.orderService.getOrders().pipe(first()).subscribe(x =>
      this.orders = x.filter(order =>
        order.user.username == this.tempService.currentUser.username
        && order.user.password == this.tempService.currentUser.password));
  }

  translate(UTCString: string): string {
    return new Date(UTCString).toString()
  }
}
