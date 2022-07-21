import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { AdministrationDashboardComponent } from "./dashboard/administration.dashboard.component";
import { AdministrationMainComponent } from "./layout/main/administration.main.component";


const routes: Routes = [
    { path: '', component: AdministrationMainComponent, 
    canActivate: [AuthGuard],
    children: [
        { path: '', pathMatch: "full", component: AdministrationDashboardComponent},
        { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},

    ] },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})
export class AdministrationRoutingModule{

}