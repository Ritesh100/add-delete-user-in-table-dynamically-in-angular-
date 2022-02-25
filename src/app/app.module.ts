import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsertableComponent } from './usertable/usertable.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsereditComponent } from './useredit/useredit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsertableComponent,
    AdduserComponent,
    UsereditComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
