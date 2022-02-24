import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
 addForm: FormGroup = new FormGroup({
  });

  add:boolean=false;
  constructor( private form : FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.form.group({
      name: [undefined, Validators.required,Validators.minLength(5), Validators.maxLength(10)],
      age: [undefined, Validators.required],
      address:[undefined, Validators.required]
    
    });
  }
  
    onSubmitForm(): void {
      this.add=true;
       }

}
