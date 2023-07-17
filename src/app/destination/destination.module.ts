import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { DestinationRoutingModule } from './destination-routing.module';
import { AllComponent } from './all/all.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DestinationRoutingModule
  ]
})
export class DestinationModule { }
