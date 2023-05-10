import { Component } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {User} from "../Interfaces/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {} as User;
  constructor(private userService: UserServiceService, private router: Router) {
  }

  onSubmit(){
    this.userService.addUser(this.user).subscribe();
    this.router.navigate(['/login']);
  }
}
