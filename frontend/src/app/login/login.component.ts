import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../signup/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  api:string = "http://localhost:3000/auth/login";
  userService:UserService = inject(UserService);
  http:HttpClient = inject(HttpClient);

  loginForm:FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required
    ]),
    password: new FormControl("", [
      Validators.required
    ])
  })

  submitForm():void{
    console.log(this.loginForm.value);
  }
}
