import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { InterfaceService } from "src/app/interaction/interface.service";
import { User } from "src/app/interaction/users/user.model";

@Injectable({
    providedIn: 'root'
})
export class UsersService extends InterfaceService<User> {

    initialUrl(): string {
        return environment.usersUrl;
    }

    constructor( http: HttpClient, router: Router) {
        super(http, router);
    }
}



