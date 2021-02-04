import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Access} from "../share/moke/access";
import {ACCESS} from "../share/moke/access-moke";

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor() { }

  getAccessList():Observable<Access[]> {
    return of(ACCESS);
  }

  getAccess(id: number) {
    return of(ACCESS.find(access => access.id_ === id));
  }
}
