import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServerComponent } from './error-pages/server/server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', data: {web_location_context: 'client' }, loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
    { path: 'administration', data: {web_location_context: 'administration' }, loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) }, 
    { path: 'error', component: ServerComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }