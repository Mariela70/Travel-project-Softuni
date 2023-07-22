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
    if(form.invalid) {return}
   const {firstName, lastName, email, password, rePassword} = form.value;
    this.userService.register(firstName, lastName, email, password, rePassword)
    .subscribe(user =>{
       this.userService.user = user;
      this.router.navigate(['/destinations'])
    })
  }
}
