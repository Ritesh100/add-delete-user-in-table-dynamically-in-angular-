import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserResponseModel } from '../user-response-model.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  id: any;
  user: UserResponseModel = new UserResponseModel();

  constructor(private userservice: UserService,
    private activatedRoute:ActivatedRoute,   // Browser ko url kun chai path active xa bhanera herne;
  
    ) { }
    getId(){
      this.activatedRoute.params.subscribe((params) =>(this.id=params['id']));
    }


  ngOnInit(): void {
    this.getId();
  this.userservice.viewUsersById(this.id).subscribe((res)=>{
    console.log('param:',res);
    this.user=res;
  });
  }

 
  }


 
      
   