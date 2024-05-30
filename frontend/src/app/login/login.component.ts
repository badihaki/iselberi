import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../signup/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  api: string = 'http://localhost:3000/auth/login';
  userService: UserService = inject(UserService);
  http: HttpClient = inject(HttpClient);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submitForm(): void {
    if (this.loginForm.valid) {
      this.http.post(this.api, this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.userService.setUser(res as {username:string, email:string});
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('login flow completed, bub');
        },
      });
    }
    this.loginForm.reset();
  }
}
