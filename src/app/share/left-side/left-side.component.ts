import { Component, OnInit } from '@angular/core';
import {LeftTagsService} from "../left-tags.service";

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {
  all_tags = [];

  constructor(private leftTagsService:LeftTagsService) { }

  ngOnInit(): void {
    this.getAllTags()
  }

  getAllTags() {
    this.leftTagsService.getTags().subscribe(tags_ => this.all_tags = tags_);
  }

}
