import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../../share/moke/user";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  validateForm: FormGroup;

  user: User;

  EditUser() {
    console.log('用户名: '+this.user.username+',密码: '+ this.user.password);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,
              private route:ActivatedRoute,
              private userService:UserService,
              private location: Location) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    /*this.route.params.subscribe(data=>{
      console.log(data.id);
    })*/
    this.getUser();
  }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      console.log(user);
      this.user = user
    });
  }

  goBack(): void {
    this.location.back();
  }

}
