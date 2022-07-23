import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ServerComponent } from './error-pages/server/server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenuService } from './interaction/app.menu.service';
import { ClientInterceptor } from './interaction/client.interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        ProgressSpinnerModule
    ],
    declarations: [
        AppComponent,
        ServerComponent,
        NotFoundComponent
    ],
    providers: [
        
        MessageService, 
        MenuService, 
        ConfirmationService ,
        { provide: HTTP_INTERCEPTORS, useClass: ClientInterceptor, multi: true },
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
