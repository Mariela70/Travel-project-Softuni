import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  destination: any;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.destination = params;
    });
  }

  edit(form: NgForm): void {
    const formData = form.value;
    const title = formData.title;
    const location = formData.location
    const date = formData.date;
    const imageUrl = formData.imageUrl;
    const description = formData.description;

    const data = {
      title: title,
      location: location,
      date: date,
      description: description,
      imageUrl: imageUrl,
    };

    this.destinationService
      .edit(this.destination._id, data)
      .subscribe((res) => {
        this.router.navigate([`destinations/${this.destination._id}`]);
      });
  }
  }
