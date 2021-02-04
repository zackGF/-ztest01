import { Component, OnInit } from '@angular/core';
import {AccessService} from "../access.service";
import {Access} from "../../share/moke/access";
import {Router} from "@angular/router";

@Component({
  selector: 'app-access-list',
  templateUrl: './access-list.component.html',
  styleUrls: ['./access-list.component.scss']
})
export class AccessListComponent implements OnInit {
  accesslist: Access[];


  constructor(
    private accessService: AccessService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllAccess();
  }

  getAllAccess() {
    this.accessService.getAccessList().subscribe(data => {
      this.accesslist = data;
    });
  }

  goDetails(id: number) {
    this.router.navigate(['/layout/editAccess',id])
  }

  gotoAddNewAccess() {
    this.router.navigate(['/layout/addNewAccess'])
  }
}
