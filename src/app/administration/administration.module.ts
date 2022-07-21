import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea'
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table'
import { ToolbarModule } from 'primeng/toolbar'
import { AdministrationComponent } from './administration.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationMainComponent } from './layout/main/administration.main.component';
import { AdministrationMenuComponent } from './layout/menu/administration.menu.component';
import { AdministrationTopbarComponent } from './layout/topbar/administration.topbar.component';
import { AdministrationMenuitemComponent } from './layout/menu/administration.menuitem.component';
import { AdministrationDashboardComponent } from './dashboard/administration.dashboard.component';
import { AdminInterceptor } from '../interaction/administration.interceptor.service';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        AdministrationRoutingModule,
        RouterModule,
        PasswordModule,
        CheckboxModule,
        RadioButtonModule,
        DropdownModule,
        ButtonModule,
        InputTextareaModule,
        InputTextModule,
        InputNumberModule,
        ProgressSpinnerModule,
        ConfirmDialogModule,
        DialogModule,
        TableModule,
        ToolbarModule
    ],
    declarations: [
        AdministrationComponent,
        AdministrationMainComponent,
        AdministrationMenuComponent,
        AdministrationMenuitemComponent, 
        AdministrationTopbarComponent,
        AdministrationDashboardComponent,
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AdminInterceptor, multi: true }],
})
export class AdministrationModule { }
