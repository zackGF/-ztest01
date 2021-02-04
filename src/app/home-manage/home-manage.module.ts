import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeManageRoutingModule } from './home-manage-routing.module';
import { HomeComponent } from './home/home.component';
import {DemoNgZorroAntdModule} from "../ng-zorro-antd.module";


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeManageRoutingModule,
        DemoNgZorroAntdModule
    ]
})
export class HomeManageModule { }
