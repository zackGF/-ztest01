import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {
  today:any = Date.now();
  timer:any;


  constructor() {
    this.timer=setInterval(()=> {
      this.today = Date.now();
    }, 1000)
  }

  ngOnInit(): void {
  }

}
