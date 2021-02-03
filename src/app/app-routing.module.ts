import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EntranceComponent} from "./share/entrance/entrance.component";
import {LayoutComponent} from "./share/layout/layout.component";

const routes: Routes = [

  {
    path: 'entrance',
    component: EntranceComponent
  },
  {path: '', redirectTo: '/layout/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
