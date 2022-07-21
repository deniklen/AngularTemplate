import { Component, Injectable } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'client-root',
    templateUrl: './client.component.html'
})
@Injectable({ providedIn: 'root' })
export class ClientComponent {

    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
