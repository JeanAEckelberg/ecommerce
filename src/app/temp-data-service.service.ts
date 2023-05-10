import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { User } from "./Interfaces/user"
import { Order } from "./Interfaces/order"
import { Product } from "./Interfaces/product"


@Injectable({
  providedIn: 'root'
})
export class TempDataServiceService {

  private _currentUser: User = {} as User;
  private _currentOrder: Order = {} as Order;
  private _currentProduct: Product = {} as Product;
  private _currentCart$: BehaviorSubject<Product[] | undefined> = new BehaviorSubject<Product[] | undefined>(undefined);

  constructor() { }

  get currentUser(): User {
    return this._currentUser;
  }

  set currentUser(value: User) {
    this._currentUser = value;
  }

  get currentOrder(): Order {
    return this._currentOrder;
  }

  set currentOrder(value: Order) {
    this._currentOrder = value;
  }

  get currentProduct(): Product {
    return this._currentProduct;
  }

  set currentProduct(value: Product) {
    this._currentProduct = value;
  }

  getCurrentCart$(): Observable<Product[] | undefined> {
    return this._currentCart$.asObservable();
  }

  setCurrentCart$(value: Product[]) {
    this._currentCart$.next(value);
  }
}
