import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interaction/users/user.model';
import { UsersService } from '../users.service';

@Component({
    selector: 'administration-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    users: User[];
    test: User;
    constructor(private usersService: UsersService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe((data => {
            this.users = data.users;
          }));
    }
}
