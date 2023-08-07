import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthActivate } from '../shared/guards/auth.activate';
import { CurrentDestinationComponent } from '../destination/current-destination/current-destination.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProfileComponent,
        canActivate: [AuthActivate],
      },
      {
        path: ':destinationId',
        component: CurrentDestinationComponent,
        canActivate: [AuthActivate],

      },
    ]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
