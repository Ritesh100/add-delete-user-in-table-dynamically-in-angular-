import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
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
  path:'useredit/:id',
component:UsereditComponent
},
{
  path:'detail-View/:id',
  component:DetailViewComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
