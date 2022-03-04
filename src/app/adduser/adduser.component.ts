import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
  });
  validation: Boolean = false;


  constructor(private formBuilder: FormBuilder,
    private userservice: UserService,
    private router :Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
      mobileNumber: [undefined, Validators.required],
      dob: [undefined, Validators.required],
      age: [undefined, Validators.required],
      contacts : new FormArray([])
    });
    this.initContacts();
  }
  
  initContacts() {
    (this.userForm.get('contacts') as FormArray).push(
      this.formBuilder.group({
        mobileNumber:[undefined],
         email:[undefined]
       
      })
    )
  }
  get getContactForm() :FormArray {
    return (this.userForm.get('contacts') as FormArray);
  }
  onAddUser(user: any) {
    this.validation = true;
    if (this.userForm.valid) {
      this.userservice.addUsers(user).subscribe(
        (response: any) => {
          console.log(response);
        }, error => {
          console.error(error);
        }
      );
    }
  }
removeContact(contactIndex: number){
  this.getContactForm.removeAt(contactIndex);
}

  calculateAge() {
    var date = this.userForm.value.dob;
    var year = new Date(date);
    var timeDiff = Math.abs(Date.now() - year.getTime());
    let age = Math.floor((timeDiff/(1000*3600*24*365)))
    this.userForm.patchValue({age:age})
  }
}
