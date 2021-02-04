import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../share/moke/user";
import {USERS} from "../share/moke/user-moke";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
  }

  userInfo(): Observable<User> {

    let auth_token = window.localStorage.getItem('auth_token');
    console.log(auth_token);

    return of(USERS.find(user => user.token_ === auth_token))
  }
}
