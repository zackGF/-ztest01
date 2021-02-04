import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {

  roleForm = {
    roleName: '',
    roleNameZh: ''
  };

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  SaveRole() {
    console.log(this.roleForm);
  }

  goBack() {
    this.location.back()
  }
}
