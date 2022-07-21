import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BaseResolver implements Resolve<any> {
    constructor(private http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        let url = route.data['url'];
        const id = route.params['id'];

        if (id)
            url += id;

        return this.http.get<any>(url);
    }
}