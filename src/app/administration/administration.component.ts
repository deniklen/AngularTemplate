import { Component, Injectable } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'administration-root',
    templateUrl: './administration.component.html'
})
@Injectable({ providedIn: 'root' })
export class AdministrationComponent {

    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
