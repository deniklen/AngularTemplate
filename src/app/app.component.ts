import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LoaderService } from './interaction/loader.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    showLoader = false;
    constructor(private primengConfig: PrimeNGConfig, private loaderService: LoaderService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';

        this.loaderService.isLoading.subscribe(isLoading => this.showLoader = isLoading);
    }
}
