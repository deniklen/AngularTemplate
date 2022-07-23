import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActivateUserComponent } from './activate/activate.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    PasswordModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ActivateUserComponent
  ], providers: [JwtHelperService]
})
export class AuthModule { }
