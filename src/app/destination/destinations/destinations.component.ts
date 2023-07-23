import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';
import { Destination } from 'src/app/types/destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
    allList: Destination[] =[];
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
