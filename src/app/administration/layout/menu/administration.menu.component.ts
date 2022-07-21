import { Component, OnInit } from '@angular/core';
import { AdministrationMainComponent } from '../main/administration.main.component';

@Component({
    selector: 'administration-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li administration-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li administration-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AdministrationMenuComponent implements OnInit {

    model: any[];

    constructor(public administration: AdministrationMainComponent) { }

    ngOnInit() {
        this.model = [{
            label: 'Pragmatic Menu',
            items: [
                { label: 'Dashboard', routerLink: ['/administration']},
                { label: 'Users', routerLink: ['/administration/users']},
            ]         
        }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
