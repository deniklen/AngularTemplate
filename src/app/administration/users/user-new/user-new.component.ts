import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../users.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'administration-user-new',
    templateUrl: './user-new.component.html'
})
export class UserNewComponent {


    constructor( ) { }

    ngOnInit(): void {

    }

}


