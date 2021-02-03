import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  today: any = Date.now();

  constructor() {
    setInterval(() => {
      this.today = Date.now();// 或者this.today = new Date();
    }, 1000)
  }

  ngOnInit(): void {
  }

}
