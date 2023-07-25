import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 get isLoggedIn() {
  return this.userService.isLoggedIn;
 }
 get user() {
  return this.userService.user;
 }
constructor(private userService: UserService, private router: Router) {}
}
