import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-access-add',
  templateUrl: './access-add.component.html',
  styleUrls: ['./access-add.component.scss']
})
export class AccessAddComponent implements OnInit {
  accessForm={
    accessName:'',
    accessLink:''
  };

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  SaveAccess() {
    console.log(this.accessForm);
  }
}
