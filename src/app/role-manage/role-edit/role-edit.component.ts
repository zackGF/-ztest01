import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {RoleService} from "../role.service";
import {Roles} from "../../share/moke/roles";

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  roleForm = {
    id:'',
    roleName: '',
    roleNameZh: ''
  };

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private roleService: RoleService
  ) {
  }

  ngOnInit(): void {
    this.getRole();
  }

  EditRole() {

  }

  getRole() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.roleService.getRole(id).subscribe(data => {
      this.roleForm.id = data.id_ + '';
      this.roleForm.roleName = data.role_name;
      this.roleForm.roleNameZh = data.role_name_zh;
    });
  }

  goBack() {
    this.location.back();
  }
}
