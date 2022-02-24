import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
  userDetails ={
    id:'',
    name: '',
    address:'',
    age: 0
    };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmitForm(){
    //this.router.navigateByUrl();
  }

}
