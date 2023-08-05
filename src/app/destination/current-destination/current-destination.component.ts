import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from 'src/app/shared/types/destination';
import { UserService } from 'src/app/user/user.service';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-current-destination',
  templateUrl: './current-destination.component.html',
  styleUrls: ['./current-destination.component.css']
})
export class CurrentDestinationComponent implements OnInit {
  destination: Destination | undefined;
  userId: string = '';
  counts: any;
  destinationId: string = this.activatedRoute.snapshot.params['destinationId'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private destinationService: DestinationService,
    private router: Router,
    ) {
  
  }

  ngOnInit(): void {
    this.fetchDestination();
    this.userId = this.userService.user?._id;
    // this.getLikesList(this.destinationId);
    // this.getDestinationLikes(this.destinationId);
  }
  fetchDestination(): void {
    this.destinationService
      .getDestinationById(this.destinationId)
      .subscribe((destination) => {
        this.destination = destination;
      });
  }
  edit(): void {
    this.router.navigate(['/edit'], {
      queryParams: {
        title: this.destination?.title,
        location: this.destination?.location,
        date: this.destination?.date,
        image: this.destination?.image,
        description: this.destination?.description,
        _id: this.destinationId,
      },
    });
  }

  deleteD() {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this destination?'
    );

    if (isConfirmed) {
      this.destinationService
        .delete(this.destinationId)
        .subscribe((res) => {
          this.router.navigate(['/home']);
        });
    }
  }
  
}

