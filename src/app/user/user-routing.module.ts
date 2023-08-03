import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   loginRequired: false
    // }
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   loginRequired: false
    // }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   loginRequired: true
    // }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   loginRequired: true
    // }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
