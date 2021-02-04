import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleManageRoutingModule } from './role-manage-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import {DemoNgZorroAntdModule} from "../ng-zorro-antd.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [RoleListComponent, RoleAddComponent, RoleEditComponent],
  imports: [
    CommonModule,
    RoleManageRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule
  ]
})
export class RoleManageModule { }
