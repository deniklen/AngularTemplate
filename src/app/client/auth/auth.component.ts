import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../client.module';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private jwtHelper: JwtHelperService) { }

  ngOnInit() {
    const token = tokenGetter();

    if (!token || this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['/login']);
  }
  }
}
