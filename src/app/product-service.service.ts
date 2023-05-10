import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "./Interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('https://ecomerce-11d12-default-rtdb.firebaseio.com/products.json', product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('https://ecomerce-11d12-default-rtdb.firebaseio.com/products.json').pipe(map(
      responseData => [ ... Object.values(responseData)]
    ));
  }
}
