import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserResponseModel } from '../user-response-model.model';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
  user: UserResponseModel = new UserResponseModel();
  id: any;

  editUser: FormGroup = new FormGroup({});
  submitted: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  getId() {
    this.activatedRoute.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {
    this.getId();
    this.userService.viewUsersById(this.id).subscribe((res) => {
      this.user = res;
      console.log(this.user);
      this.editUser.patchValue(this.user);  
    });
    this.initForm();
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.editUser.controls;
  }

  initForm() {
    this.editUser = this.formBuilder.group({
      name: [ undefined, Validators.required],
      email: [ undefined, Validators.required],
      password: [ undefined, Validators.required],
      mobileNumber: [undefined, Validators.required],
      dob:[undefined,Validators.required],
      contacts: new FormArray([]),
    });

    this.initContacts();
  }

  initContacts() {
    (this.editUser.get('contacts') as FormArray).push(   //by default yeuta array form push gareko xam so uta tei aako 
      this.formBuilder.group({
        mobileNumber:[undefined],
        email:[undefined],
      }));
  }

  get getContactForm(): FormArray {
    return (this.editUser.get('contacts') as FormArray);
  }


  onEditUser(user:any) {
    this.submitted = true;
    this.userService.editUsers(this.id,user).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/users-table']);
      },
      (error) => {
        console.error(error);
      }
    );

  }
}