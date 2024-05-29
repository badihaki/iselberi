import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';

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
  api:string = "http://localhost:3000/auth/signup";
  userService:UserService = inject(UserService);
  http:HttpClient = inject(HttpClient);

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
    // console.log("chekc out this form");
    // console.log(this.signUpForm.value);
    if(this.signUpForm.value.passwordConfirmation != this.signUpForm.value.password){
      this.addError("Passwords do not match");
      this.startErrorTimer();
    }
    else{
      if(this.signUpForm.valid){
        console.log("made it to signup")
        this.http.post(this.api, this.signUpForm.value).subscribe({
          next: (data)=>{
             console.log(data);
          },
          error: (err)=>{
            this.addError(err.error.error);
            this.startErrorTimer();
          },
          complete: ()=>{
            console.log("done with sign up flow");
          }
        });
      }
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
