import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {DemoNgZorroAntdModule} from "../ng-zorro-antd.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [UserListComponent, UserAddComponent, UserEditComponent],
  imports: [
    CommonModule,
    UserManageRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
  ]
})
export class UserManageModule { }
