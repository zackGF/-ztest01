import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from "../user-manage/user-list/user-list.component";
import {RoleListComponent} from "../role-manage/role-list/role-list.component";
import {AccessListComponent} from "../access-manage/access-list/access-list.component";
import {HomeComponent} from "../home-manage/home/home.component";
import {UserAddComponent} from "../user-manage/user-add/user-add.component";
import {UserEditComponent} from "../user-manage/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'userList',
    component: UserListComponent,
    children: []
  },
  {path: 'addNewUser', component: UserAddComponent},
  {path: 'editUser/:id', component: UserEditComponent},
  {
    path: 'roleList',
    component: RoleListComponent,
    children: []
  },
  {
    path: 'accessList',
    component: AccessListComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule {
}
