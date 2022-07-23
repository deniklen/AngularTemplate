import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "src/app/interaction/users/user.model";
import { Response } from "src/app/interaction/response";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    initialUrl(): string {
        return environment.usersRoute;
    }

    constructor(private httpClient: HttpClient) {
    }

    getAllUsers () {
        return this.httpClient.get<User[]>(environment.baseUrl + this.initialUrl())
    }

    getOneUser(id: string) {
        return this.httpClient.get<User[]>(environment.baseUrl + this.initialUrl() + id)
    }
}



