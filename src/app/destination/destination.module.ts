import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationsComponent } from './destinations/destinations.component';
import { CurrentDestinationComponent } from './current-destination/current-destination.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DestinationsComponent,
    CurrentDestinationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DestinationRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DestinationModule { }
