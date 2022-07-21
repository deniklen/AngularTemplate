import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserNewComponent } from "./user-new/user-new.component";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'edit',
        component: UserEditComponent
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
