import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeManageRoutingModule } from './home-manage-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeManageRoutingModule
  ]
})
export class HomeManageModule { }
