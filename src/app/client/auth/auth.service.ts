import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Message } from "primeng/api";
import { catchError, Subject, tap, throwError } from "rxjs";
import { LoginRequest } from "src/app/interaction/login/login-request";
import { environment } from "src/environments/environment";


@Injectable({ providedIn: 'root' })
export class AuthService {
    private autoLogoutTimer;
    autoLogoutMessage: Message[] = [];

    errorMessages: Subject<any> = new Subject();

    constructor(
        private http: HttpClient,
        private router: Router,
        private jwtHelper: JwtHelperService 
    ) {
    }

    ngOnInit() {
    }

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
        const token = localStorage["jwt-key"];
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
        console.log("login")

        return this.http.post<any>(
            environment.baseUrl + environment.loginRoute,
            user)
            .pipe(tap(response => {
                console.log(response)
                const token = (<any>response).result.token;

                const decoded = this.jwtHelper.decodeToken(token);
                const userId = this.getUserId(decoded);

                localStorage.setItem('jwt', token);
                localStorage.setItem('userId-key', userId);
                localStorage.setItem('user-key', response.result.user.emailAddress);
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
        localStorage.removeItem('jwt-key');
        localStorage.removeItem('userId-key');
        localStorage.removeItem('user-key');
    }

    setJwtToken(token) {
        localStorage.setItem('jwt-key', token);
    }

    setAutoLogout(token: string) {
        this.autoLogoutTimer = setTimeout(() => {
            this.autoLogoutMessage = [{
                severity: 'warn',
                summary: 'Session Expired!',
                detail: 'Please log in again.'
            }];
            this.logout();
        }, this.timeUntilJwtExpiration(token))
    }

    timeUntilJwtExpiration(token: string) {
        const tokenExpirationTimestamp = this.jwtHelper.getTokenExpirationDate(token).getTime();
        const currentTimeTimestamp = new Date().getTime();
        return tokenExpirationTimestamp - currentTimeTimestamp;
    }
}