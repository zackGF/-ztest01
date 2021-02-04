import {Component, OnInit} from '@angular/core';

import {Pipe, PipeTransform} from "@angular/core";
import {HomeService} from "../home.service";
import {User} from "../../share/moke/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  account: User;

  constructor(
    private homeService: HomeService
  ) {
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.homeService.userInfo().subscribe(data => {
      this.account = data;
    });
  }

  logout() {
    window.localStorage.clear()
    location.reload();
  }
}
