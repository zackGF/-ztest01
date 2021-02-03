import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntranceService} from "../entrance.service";

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {
  formData={
    username: '',
    password: ''
  };

  constructor(private route:ActivatedRoute,
              private entranceService: EntranceService,
              private router:Router) { }

  ngOnInit(): void {
  }

  sign() {
    let username = this.formData.username;
    let pwd = this.formData.password;
    this.entranceService.getUserAuth(username, pwd).subscribe(data => {
      window.localStorage.setItem('auth_token',data.token_)
      this.router.navigate(['/layout/home'])
    });
  }
}
