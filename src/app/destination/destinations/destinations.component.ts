import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/shared/types/destination';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
    allList: Destination[] | null = null;
    thereAreNoDestination: boolean = false;
    constructor(private apiService: DestinationService) {}
  
    ngOnInit(): void {
      this.apiService.getAllDestination().subscribe((all) =>{
        this.allList = all;
        if(this.allList.length === 0){
          this.thereAreNoDestination = true;
        }
      })
    }  
}
