import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

 
  userForm: FormGroup
  activatedRoute: any;

  constructor(private formBuilder: FormBuilder) {
    
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^([1][8-9]|[2-5][0-9]|[6][0-5])$/)]],
      email: ['', [Validators.required, Validators.email]],
      // address: this.formBuilder.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip:['', [Validators.required]],
      // }),
    })
  
}

  ngOnInit(): void {
  }

}
