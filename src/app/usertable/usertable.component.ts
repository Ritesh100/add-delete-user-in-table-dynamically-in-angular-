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
    private userservice: UserService,
)
   { } 


  ngOnInit(): void {
    this.viewUser();
  }
  onClick=  () => {
    this.router.navigateByUrl('/adduser');
};

onView(id:number | undefined){
  this.router.navigate(['/detail-View',id]);
}


onEdit(id:any){
  this.router.navigate(['/useredit',id]);
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

deleteUser(id:any){
  if(confirm("Do You want to Delete?")){
  this.userservice.deleteUser(id).subscribe(
    (response:any) =>{
      
      console.log(response);
      this.viewUser();
      
    }, error =>{
      console.error(error);
    }
    
  );
}
}

}