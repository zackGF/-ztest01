import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import {DemoNgZorroAntdModule} from "../ng-zorro-antd.module";
import {UserManageModule} from "../user-manage/user-manage.module";


@NgModule({
  declarations: [LeftSideComponent, RightSideComponent],
  exports: [
    LeftSideComponent,
    RightSideComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class ShareModule { }
