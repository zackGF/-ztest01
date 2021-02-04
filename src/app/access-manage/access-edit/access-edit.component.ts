import {Component, OnInit} from '@angular/core';
import {AccessService} from "../access.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-access-edit',
  templateUrl: './access-edit.component.html',
  styleUrls: ['./access-edit.component.scss']
})
export class AccessEditComponent implements OnInit {
  accessForm = {
    id:'',
    accessName: '',
    accessLink: ''
  };

  constructor(
    private accessService: AccessService,
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getAccess()
  }

  goBack() {
    this.location.back();
  }

  EditAccess() {

  }

  getAccess() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.accessService.getAccess(id).subscribe(data => {
      this.accessForm.id = data.id_ + '';
      this.accessForm.accessName = data.name_;
      this.accessForm.accessLink = data.link_;
    });
  }
}
