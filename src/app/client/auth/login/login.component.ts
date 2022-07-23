import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { LoginRequest } from 'src/app/interaction/login/login-request';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl('')
  })

  get email() { return this.loginForm.controls.email; }
  get password() { return this.loginForm.controls.password; }
  get rememberMe() { return this.loginForm.controls.rememberMe; }

  
  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(new LoginRequest(this.email.value, this.password.value));
  }


}
