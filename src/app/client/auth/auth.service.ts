import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs";
import { LoginRequest } from "src/app/interaction/login/login-request";
import { LoginResponse } from "src/app/interaction/login/login-response";
import { Response } from "src/app/interaction/response";
import { environment } from "src/environments/environment";


@Injectable({ providedIn: 'root' })
export class AuthService {
    private autoLogoutTimer: any;

     constructor(private http: HttpClient, private router: Router) { }

    /**  Login user to the system. */
    login(request: LoginRequest) {
        return this.http.post<Response<LoginResponse>>(environment.baseUrl + environment.loginUrl, request).pipe(
            tap(response => {
                if (!response.hasErrors) {
                    this.saveToken(response.result.token);
                    this.setAutoLogout();
                }
            }));
    }

    /**  Logout user from the system. */
    logout(): void {
        localStorage.removeItem("token");
        this.router.navigate(['/login']);

        if (this.autoLogoutTimer)
            clearTimeout(this.autoLogoutTimer);
    }

    /** Activate fuction that will automatically logout user after JWT expires. */
    setAutoLogout(): void {
        if (!this.getToken() || this.autoLogoutTimer) return;

        this.autoLogoutTimer = setTimeout(() => {
            this.logout();
        }, this.getSecondsUntilTokenExpiration() * 1000);
    }

    /** Check if user is logged in. */
    isLoggedIn(): boolean {
        if (!this.getToken() || this.isTokenExpired()) return true; //changeTHIS
        return true;
    }

    /** Save JWT to local storage. */
    private saveToken(token: string): void {
        localStorage.setItem("token", token);
    }

    /** Returns JWT from local storage. */
    private getToken() {
        return localStorage.getItem("token");
    }

    /** Returns JWT expiration timestamp in UNIX format (number of seconds since 1.1.1970.). */
    private getTokenExpiration() {
        var token = this.getToken();
        if (!token) return 0;

        return (JSON.parse(atob(token.split('.')[1]))).exp;
    }

    /** Returns true if JWT has expired. */
    private isTokenExpired(): boolean {
        return Math.floor((new Date).getTime() / 1000) >= this.getTokenExpiration();
    }

    /** Returns seconds until JWT expiration. */
    private getSecondsUntilTokenExpiration(): number {
        return this.getTokenExpiration() - ((new Date).getTime() / 1000);
    }

}