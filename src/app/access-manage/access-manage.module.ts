import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessManageRoutingModule } from './access-manage-routing.module';
import { AccessListComponent } from './access-list/access-list.component';
import { AccessAddComponent } from './access-add/access-add.component';
import { AccessEditComponent } from './access-edit/access-edit.component';
import {DemoNgZorroAntdModule} from "../ng-zorro-antd.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AccessListComponent, AccessAddComponent, AccessEditComponent],
  imports: [
    CommonModule,
    AccessManageRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule
  ]
})
export class AccessManageModule { }
