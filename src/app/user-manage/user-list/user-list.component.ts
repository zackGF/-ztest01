import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../../share/moke/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  size = 'small';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    });
  }

  gotoAddNewUser() {
    this.router.navigate(['/layout/addNewUser'])
  }

  goDetails(id: number) {
    this.router.navigate(['/layout/editUser',id])
  }
}
