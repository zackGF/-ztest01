import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../../share/moke/user";
import {Location} from "@angular/common";
import {Roles} from "../../share/moke/roles";
import {RoleService} from "../../role-manage/role.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User;

  roles: Roles[];
  roleIds: number[] = [];

  EditUser() {
    console.log('用户名: ' + this.user.username + ',密码: ' + this.user.password);
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserService,
              private location: Location,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      // console.log(user);
      this.user = user
    });
    this.getRoleList();
  }

  getRoleList() {
    this.roleService.getRoles().subscribe(data => {
      // console.log(data);
      this.roles = data;
    });
  }

  goBack(): void {
    this.location.back();
  }

  selCheckBox(checked: boolean, id: number) {
    if (checked) {
      this.roleIds.push(id);
    } else {
      let index = this.roleIds.indexOf(id);
      if (index > -1) {
        this.roleIds.splice(index, 1)
      }
    }
  }
}
