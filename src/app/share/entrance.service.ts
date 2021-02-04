import {Injectable} from '@angular/core';
import {USERS} from "./moke/user-moke";
import {Observable, of} from "rxjs";
import {User} from "./moke/user";

@Injectable({
  providedIn: 'root'
})
export class EntranceService {
  private id: number;

  constructor() {
  }

  getUserAuth(username: string, pwd: string): Observable<User> {
    let userObj = USERS.find(user => {
      if (user.username === username && user.password === pwd) {
        return user;
      }
    });
    return of(userObj);
  }

  getUserByToken(token: string):User {
    return USERS.find(user => {
      if (user.token_ === token) {
        // window.localStorage.setItem('user_info', JSON.stringify(user));
        return user;
      }
    });
  }
}
