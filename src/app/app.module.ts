import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import { UserModule } from './user/user.module';
import { DestinationModule } from './destination/destination.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AppInterceptor } from './app.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent
  ],
  imports: [
    UserModule,
    CoreModule,
    DestinationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AppInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
