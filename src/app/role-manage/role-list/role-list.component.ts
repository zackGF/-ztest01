import {Component, OnInit} from '@angular/core';
import {Roles} from "../../share/moke/roles";
import {RoleService} from "../role.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roles: Roles[];
  size: 'small';

  constructor(
    private roleService: RoleService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.roleService.getRoles().subscribe(res => {
      this.roles = res;
    });
  }

  gotoAddNewRole() {
    this.router.navigate(['/layout/addNewRole'])
  }

  goDetails(id: number) {
    this.router.navigate(['/layout/editRole',id])
  }
}
