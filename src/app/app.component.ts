import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ztest01';
  today: any = Date.now();

  constructor() {
    setInterval(() => {
      this.today = Date.now();// 或者this.today = new Date();
    }, 1000)
  }
}
