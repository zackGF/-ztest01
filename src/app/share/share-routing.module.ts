import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from "../user-manage/user-list/user-list.component";
import {RoleListComponent} from "../role-manage/role-list/role-list.component";
import {AccessListComponent} from "../access-manage/access-list/access-list.component";
import {HomeComponent} from "../home-manage/home/home.component";
import {UserAddComponent} from "../user-manage/user-add/user-add.component";
import {UserEditComponent} from "../user-manage/user-edit/user-edit.component";
import {LayoutComponent} from "./layout/layout.component";
import {AuthGuard} from "./auth.guard";
import {RoleAddComponent} from "../role-manage/role-add/role-add.component";
import {RoleEditComponent} from "../role-manage/role-edit/role-edit.component";
import {AccessAddComponent} from "../access-manage/access-add/access-add.component";
import {AccessEditComponent} from "../access-manage/access-edit/access-edit.component";

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'userList',
        component: UserListComponent,
      },
      {path: 'addNewUser', component: UserAddComponent},
      {path: 'editUser/:id', component: UserEditComponent},
      {
        path: 'roleList',
        component: RoleListComponent,
      },
      {path: 'addNewRole',component: RoleAddComponent},
      {path: 'editRole/:id', component: RoleEditComponent},
      {
        path: 'accessList',
        component: AccessListComponent,
      },
      {path: 'addNewAccess',component: AccessAddComponent},
      {path: 'editAccess/:id',component: AccessEditComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule {
}
