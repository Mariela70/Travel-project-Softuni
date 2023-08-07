import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DestinationService } from 'src/app/destination/destination.service';
import { Destination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  get user() {
    return this.userService.user;
  }
  destinationsList: Destination[] | null = null;
  thereAreNoDestination: boolean = false;
  userId: string = '';

  constructor(private userService: UserService) { }


  ngOnInit(): void {

    this.userId = this.userService.user?._id;
    this.userService.getMyDestination(this.userId).subscribe((destination) => {
      this.destinationsList = destination.filter(
        (destination) => destination._ownerId === this.userId
      );
      if (this.destinationsList.length === 0) {
        this.thereAreNoDestination = true;
      }
    })
  }

}

