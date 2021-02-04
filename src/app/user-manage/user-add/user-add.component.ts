import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {RoleService} from "../../role-manage/role.service";
import {Roles} from "../../share/moke/roles";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  validateForm: FormGroup;

  userForm = {
    username: '',
    password: ''
  }

  roles: Roles[];
  roleIds: number[] = [];
  passwordVisible: true;

  SaveUser() {
    // console.log('用户名: ' + this.username + ',密码: ' + this.password);
  }
  constructor(private fb: FormBuilder,
              private location: Location,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    this.getRoleList();
  }

  getRoleList() {
    this.roleService.getRoles().subscribe(data => {
      // console.log(data);
      this.roles = data;
    });
  }

  goBack() {
    this.location.back();
  }

  selCheckBox(checkbox: boolean, id: number) {
    if (checkbox) {
      this.roleIds.push(id);
    } else {
      let index = this.roleIds.indexOf(id);
      if (index > -1) {
        this.roleIds.splice(index,1)
      }
    }
  }

}
