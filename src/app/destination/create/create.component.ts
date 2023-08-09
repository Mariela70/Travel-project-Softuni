import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private destinationService: DestinationService,
    private router: Router
  ) {}

  create(form: NgForm): void {
    const formData = form.value;
    const title = formData.title;
    const location = formData.location;
    const date = formData.date;
    const imageUrl = formData.imageUrl;
    const description = formData.description;

    const data = {
      title: title,
      location: location,
      description: description,
      imageUrl: imageUrl,
      date: date,
    };

    this.destinationService.create(data).subscribe(
      (data) => {
        this.router.navigate([`/destinations/${data._id}`]);
      },
      (error) => {
        alert(error.message);
      }
    );
  }
  }

