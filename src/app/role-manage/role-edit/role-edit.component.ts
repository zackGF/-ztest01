import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {RoleService} from "../role.service";
import {Roles} from "../../share/moke/roles";
import {AccessService} from "../../access-manage/access.service";
import {Access} from "../../share/moke/access";

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  roleForm = {
    id: '',
    roleName: '',
    roleNameZh: ''
  };
  accessList: Access[];
  accessIds: number[] = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private roleService: RoleService,
    private accessService: AccessService
  ) {
  }

  ngOnInit(): void {
    this.getRole();
  }

  EditRole() {
    console.log(this.roleForm.roleNameZh + ',' + this.accessIds);
  }

  getRole() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.roleService.getRole(id).subscribe(data => {
      this.roleForm.id = data.id_ + '';
      this.roleForm.roleName = data.role_name;
      this.roleForm.roleNameZh = data.role_name_zh;
    });
    this.getAccessList()
  }

  getAccessList() {
    this.accessService.getAccessList().subscribe(data => {
      this.accessList = data;
    });
  }

  goBack() {
    this.location.back();
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
