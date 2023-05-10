import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "./Interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('https://ecomerce-11d12-default-rtdb.firebaseio.com/users.json', user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get('https://ecomerce-11d12-default-rtdb.firebaseio.com/users.json').pipe(map(
      responseData => [...Object.values(responseData)]
    ));
  }
}
