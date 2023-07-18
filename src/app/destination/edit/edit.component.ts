import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private userService: UserService, private router: Router) { }
  edit(form: NgForm): void {
    // this.userService.edit();
    this.router.navigate(['/']);
  }
}
