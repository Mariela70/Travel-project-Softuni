import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private userService: UserService, private router: Router) { }
  create(form: NgForm): void {
    // this.userService.create();
    this.router.navigate(['/']);
  }
}
