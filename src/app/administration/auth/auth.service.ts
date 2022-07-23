import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError, Subject, tap, throwError } from "rxjs";
import { LoginRequest } from "src/app/interaction/login/login-request";
import { LoginResponse } from "src/app/interaction/login/login-response";
import { Response } from "src/app/interaction/response";
import { environment } from "src/environments/environment";


@Injectable({ providedIn: 'root' })
export class AuthService {
    private autoLogoutTimer: any;

    errorMessages: Subject<any> = new Subject();

     constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

     getUserId(decodedObj): string {
        const regex = /\/name$/;
        for (let key of Object.keys(decodedObj)) {
            if (regex.test(key)) {
                return decodedObj[key];
            }
        }
        return null;
    }

    private getRoles() {
        const regex = /\/role$/;
        const token = localStorage[environment["jwt-key"]];
        const decodedToken = this.jwtHelper.decodeToken(token);

        for (let key of Object.keys(decodedToken)) {
            if (regex.test(key)) {
                return decodedToken[key];
            }
        }
        return null;
    }

    isAdministrator() {
        const roles = this.getRoles();

        if (typeof roles === 'string')
            if (roles === 'Administrator') return true;


        for (let role of roles)
            if (role === 'Administrator') return true;

        return false;
    }

    login(user: LoginRequest) {

        const headers: HttpHeaders = new HttpHeaders();

        return this.http.post<any>(
            environment.baseUrl + environment.loginRoute,
            user,
            {headers: headers.append('bypassInterceptor', 'true')})
            .pipe(tap(response => {

                const token = (<any>response).result.token;

                const decoded = this.jwtHelper.decodeToken(token);
                const userId = this.getUserId(decoded);

                localStorage.setItem(environment['jwt-key'], token);
                localStorage.setItem(environment['userId-key'], userId);
                localStorage.setItem(environment['user-key'], response.result.user.emailAddress);
                this.setAutoLogout(token);

                this.router.navigate(["/"]);
            }))
            .pipe(catchError(error => {
                this.errorMessages.next([{
                    severity: 'error',
                    summary: 'Login failed!',
                    detail: 'Wrong username or password.'
                }]);

                return throwError(error);
            }))
            .subscribe();
    }

    logout() {
        this.clearLocalStorage();
        this.router.navigate(['/login']);
        if (this.autoLogoutTimer) {
            clearTimeout(this.autoLogoutTimer);
        }
    }

    clearLocalStorage() {
        localStorage.removeItem(environment['jwt-key']);
        localStorage.removeItem(environment['userId-key']);
        localStorage.removeItem(environment['user-key']);
    }

    setJwtToken(token) {
        localStorage.setItem(environment['jwt-key'], token);
    }

    setAutoLogout(token: string) {
        this.autoLogoutTimer = setTimeout(() => {
            this.logout();
        }, this.timeUntilJwtExpiration(token))
    }

    timeUntilJwtExpiration(token: string) {
        const tokenExpirationTimestamp = this.jwtHelper.getTokenExpirationDate(token).getTime();
        const currentTimeTimestamp = new Date().getTime();
        return tokenExpirationTimestamp - currentTimeTimestamp;
    }

    requestPasswordReset(request: any) {
        return this.http.post(environment.baseUrl + environment.requestPasswordReset, request)
    }

}