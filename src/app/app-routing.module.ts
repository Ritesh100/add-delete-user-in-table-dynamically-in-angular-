import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UsersComponent } from './users/users.component';
import { UsertableComponent } from './usertable/usertable.component';

const routes: Routes = [
{
  path:'users',
  component:UsersComponent
},
{
  path:'usertable',
  component:UsertableComponent
},
{
path:'adduser',
component:AdduserComponent
},

{
  path:'useredit',
component:UsereditComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
