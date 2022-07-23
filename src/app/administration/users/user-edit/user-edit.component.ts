import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../users.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from 'src/app/interaction/users/user.model';

@Component({
    selector: 'administration-user-edit',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent {

    user: User;
    constructor(private route: ActivatedRoute ) { }
    availableRoles = [
        "A", 
        "B",
        "C"
    ]

    editUserForm: FormGroup;

    get firstName() { return this.editUserForm.controls.firstName; }
    get lastName() { return this.editUserForm.controls.lastName; }
    get email() { return this.editUserForm.controls.emailAddress; }
    get password() { return this.editUserForm.controls.password; }
    get active() { return this.editUserForm.controls.active; }


    ngOnInit(): void {
        this.route.data.subscribe((data => {
            this.user = data.user.result;
        }));
        this.editUserForm = new FormGroup({
            firstName: new FormControl(this.user.firstName),
            lastName: new FormControl(this.user.lastName),
            emailAddress: new FormControl(this.user.emailAddress),
            password: new FormControl(),
            active: new FormControl(this.user.active)
        });

        console.log(this.editUserForm)
    }
    onCancel() {

    }

    onSubmit() {
        console.log("userService")
    }
}


