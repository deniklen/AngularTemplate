import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth/auth.service';
import { AdministrationMainComponent } from '../main/administration.main.component';

@Component({
    selector: 'administration-topbar',
    templateUrl: './administration.topbar.component.html'
})
export class AdministrationTopbarComponent {

    items: MenuItem[];

    constructor(public administration: AdministrationMainComponent, private auth: AuthService) { }

    logOut() {
        this.auth.logout(); 
    }
}
