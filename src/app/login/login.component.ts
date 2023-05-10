import { Component } from '@angular/core';
import { User } from "../Interfaces/user";
import {UserServiceService} from "../user-service.service";
import {TempDataServiceService} from "../temp-data-service.service";
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {} as User;
  private usersRetrieved: User[] = [];

  constructor(private userService: UserServiceService, private tempService: TempDataServiceService, private router: Router) {
  }

  onSubmit() {
    this.userService.getUsers().pipe(first()).subscribe(users => { this.usersRetrieved = users.filter(
      x => x.password === this.user.password && x.username === this.user.username); this.setUser()})
  }

  setUser() {
    if(this.usersRetrieved.length < 1) return;
    this.tempService.currentUser = this.usersRetrieved[0];
    this.router.navigate(['/products']);

  }
}
