import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { All } from 'src/app/types/all';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
    allList: All[] =[];
    thereAreNoDestination: boolean = false;
    constructor(private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.apiService.getAll().subscribe((all) =>{
        this.allList = all;
        if(this.allList.length === 0){
          this.thereAreNoDestination = true;
        }
      })
    }
}
