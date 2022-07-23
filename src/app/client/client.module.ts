import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { AppMainComponent } from './layout/main/app.main.component';
import { AppTopBarComponent } from './layout/topbar/app.topbar.component';
import { AppFooterComponent } from './layout/footer/app.footer.component';
import { AppMenuComponent } from './layout/menu/app.menu.component';
import { AppMenuitemComponent } from './layout/menu/app.menuitem.component';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientInterceptor } from '../interaction/client.interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtHelperService, JwtModule, JwtModuleOptions, JWT_OPTIONS } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
export function tokenGetter() {
    return localStorage.getItem("access_token");
}
const JWT_Module_Options: JwtModuleOptions = {
    config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.jwtAllowedDomain]
    }
};
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        ClientRoutingModule,
        RouterModule,
        PasswordModule,
        CheckboxModule,
        ButtonModule,
        InputTextModule,
        ProgressSpinnerModule,
        JwtModule.forRoot(JWT_Module_Options)
    ],
    declarations: [
        ClientComponent,
        AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        DashboardComponent
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ClientInterceptor, multi: true }]
})
export class ClientModule { }
