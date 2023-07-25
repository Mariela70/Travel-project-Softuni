import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router, private userService: UserService) {
    this.userService.logout().subscribe({
      next: () => {
        this.userService.user = null;
        this.router.navigate(['/login']);
      },
      error: () => {
        this.userService.user = null;
        this.router.navigate(['/login']);
      }
    })
  }

}
