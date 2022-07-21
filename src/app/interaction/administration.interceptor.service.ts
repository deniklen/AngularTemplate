import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, finalize, Observable, of } from "rxjs";
import { LoaderService } from "./loader.service";

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
    constructor(private router: Router, private loaderService: LoaderService, private route: ActivatedRoute) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Admin Interceptor")
        this.loaderService.show();
        
        const token = localStorage.getItem("token");
        if (token) {
            request = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + token)
            });
        }
        return next.handle(request).pipe(
            catchError(error => this.handleHttpError(this.route, error)),
            finalize(() => this.loaderService.hide()))
    }

    handleHttpError(route: ActivatedRoute, error: HttpErrorResponse) {
        if (error.status == 401) {
            this.router.navigate(['/administration/login']);
        }
        else if (error.status == 404) {
            this.router.navigate(['/not-found']);
        }
        else {
            this.router.navigate(['/error']);
        }

        return of();
    }
}