import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppMainComponent } from "./layout/main/app.main.component";


const routes: Routes = [
    { path: '', component: AppMainComponent, 
    canActivate: [AuthGuard],
    children: [
        { path: '', pathMatch: "full", component: DashboardComponent},
    ],  data: {web_location_context: 'client'} },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})
export class ClientRoutingModule{

}