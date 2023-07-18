import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { CurrentDestinationComponent } from './current-destination/current-destination.component';

const routes: Routes = [
  {
    path: 'destinations',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DestinationsComponent,
      },
      {
        path: ':destinationId',
        component: CurrentDestinationComponent,
      },
    ],
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }