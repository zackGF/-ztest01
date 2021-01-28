import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoNgZorroAntdModule} from "./ng-zorro-antd.module";


import {NZ_ICONS} from 'ng-zorro-antd/icon';
import {NZ_I18N, en_US} from 'ng-zorro-antd/i18n';
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {ShareModule} from "./share/share.module";
import {UserManageModule} from "./user-manage/user-manage.module";
import {RoleManageModule} from "./role-manage/role-manage.module";
import {AccessManageModule} from "./access-manage/access-manage.module";


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DemoNgZorroAntdModule,
    BrowserModule,
    FormsModule,
    ShareModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
