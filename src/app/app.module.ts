import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsertableComponent } from './usertable/usertable.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsereditComponent } from './useredit/useredit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsertableComponent,
    AdduserComponent,
    UsereditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
