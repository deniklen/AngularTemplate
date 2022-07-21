import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interaction/users/user.model';
import { UsersService } from '../users.service';

@Component({
    selector: 'administration-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    users: User[];
    test: User;
    constructor(private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.usersService.getObservable.subscribe(users => {
                this.users = users;
                
            }
        );
        this.users = [
            {
            id: "asbvdas12312",
            firstName: "Deni",
            lastName: "Klen",
            emailAddress: "isus@gmail.com",
            roles: [{name:"PitajBoGa"}]
        }
        ]
        console.log(this.users)
    }
}
