import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../users.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'administration-user-edit',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent {


    constructor( ) { }

    ngOnInit(): void {

    }

}


