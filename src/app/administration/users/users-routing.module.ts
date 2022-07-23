import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserNewComponent } from "./user-new/user-new.component";
import { BaseResolver } from "src/app/interaction/base.resolver";
import { environment } from "src/environments/environment";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        resolve: { users: BaseResolver},
        data: { url: environment.baseUrl + environment.usersRoute}
    },
    {
        path: ':id',
        component: UserEditComponent,
        resolve: { user: BaseResolver},
        data: { url: environment.baseUrl + environment.usersRoute}
    },
    {
        path: 'new',
        component: UserNewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
