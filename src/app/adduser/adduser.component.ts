import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
  });

 
  constructor(private formBuilder: FormBuilder,
    private userservice: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      name: [undefined],
      email: [undefined],
      password: [undefined],
      mobileNumber: [undefined],
    });
  }

  onAddUser(user: any) {
    console.log(user);
    this.userservice.addUsers(user).subscribe(
      (response: any) => {
        console.log(response);
      }, error => {
        console.error(error);
      }
    );
  }

}
