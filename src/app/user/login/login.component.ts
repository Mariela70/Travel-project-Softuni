import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }
   login(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;

    this.userService.login(email, password).subscribe(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/destinations']);
        this.userService.user = res;
      },
      (error) => {
        if (error.status === 403) {
          alert('Invalid email or password!');
        } else {
          alert(error.message);
        }
      }
    );
     }
     get isLoggedIn(): boolean {
      return this.userService.isLoggedIn;
    }
}
