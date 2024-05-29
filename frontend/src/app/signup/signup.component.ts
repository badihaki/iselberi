import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpForm:FormGroup = new FormGroup({
    username: new FormControl("", [
      Validators.required
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required
    ]),
    passwordConfirmation: new FormControl("", [
      Validators.required
    ])
  })

  submitForm():void {
    console.log("chekc out this form");
    console.log(this.signUpForm.value);
    if(this.signUpForm.get("passwordConfirmation") != this.signUpForm.get("password")){
      this.addError("Passwords do not match");
      this.startErrorTimer();
    }
    else{
      // 
    }
    this.signUpForm.reset();
  }

  addError(err:string):void{
    this.formErrors.push(err);
  }

  startErrorTimer():void{
    setTimeout(() => {
      this.formErrors = [];
    }, 3000);
  }

  formErrors:string[] = []
}
