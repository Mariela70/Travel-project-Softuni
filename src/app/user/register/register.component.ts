import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   constructor(private userService: UserService, private router: Router) { }
   register(form: NgForm): void {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const age = form.value.age;
    const password = form.value.password;
    const rePassword = form.value.rePassword;

    this.userService.register(firstName, lastName, email, age, password, rePassword).subscribe(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/destinations']);
        this.userService.user = res;
      },
      (error) => {
        error.message;
      }
    );
     }
     get isLoggedIn(): boolean {
      return this.userService.isLoggedIn;
    }
}

