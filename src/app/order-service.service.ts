import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Order} from "./Interfaces/order";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`https://ecomerce-11d12-default-rtdb.firebaseio.com/orders.json`, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get('https://ecomerce-11d12-default-rtdb.firebaseio.com/orders.json').pipe(map(
      responseData => [ ... Object.values(responseData)]
    ));
  }
}
