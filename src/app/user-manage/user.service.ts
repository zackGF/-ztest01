import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../share/moke/user";
import {USERS} from "../share/moke/user-moke";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers():Observable<User[]> {
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id_ === id));
  }
}
