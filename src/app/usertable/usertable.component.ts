import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {
  userResponse:any|[]=[];
  
  
  constructor(private router:Router,
    private userservice: UserService)
   { } 


  ngOnInit(): void {
    this.viewUser();
  }
  onClick=  () => {
    this.router.navigateByUrl('/adduser');
};

onView=() =>{
  this.router.navigateByUrl('/detail-View');
}


// deleteRow(i: number){

// this.userResponse.splice(i,1);

// }

onEdit =() =>{
  this.router.navigateByUrl('/useredit');
}

viewUser(){
  this.userservice.viewUser().subscribe(
(response: any) => {
    console.log(response);
    this.userResponse=response.users;
  }, error => {
    console.error(error);
  }
  );
}

deleteUser(data:any){
  this.userservice.deleteUser(data.id).subscribe(
    (response:any) =>{
      console.log(response);
      this.viewUser();
    }, error =>{
      console.error(error);
    }
  );
}

}