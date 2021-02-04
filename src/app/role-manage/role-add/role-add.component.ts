import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {AccessService} from "../../access-manage/access.service";
import {Access} from "../../share/moke/access";

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

  accessList: Access[];
  checked: false;
  status_: boolean;
  accessIds: number[]=[];

  constructor(
    private location: Location,
    private accessService: AccessService
  ) { }

  ngOnInit(): void {
    this.getAccessList()
  }

  SaveRole() {
    console.log(this.roleForm , this.accessIds);
  }

  getAccessList() {
    this.accessService.getAccessList().subscribe(data => {
      this.accessList = data;
    });
  }

  goBack() {
    this.location.back()
  }

  selCheckBox(checked: boolean, id: number) {
    if (checked) {
      this.accessIds.push(id);
    } else {
      let index = this.accessIds.indexOf(id);
      if (index > -1) {
        this.accessIds.splice(index, 1);
      }
    }
  }
}
