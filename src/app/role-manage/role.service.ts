import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Roles} from "../share/moke/roles";
import {ROLES} from "../share/moke/roles-moke";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  getRoles():Observable<Roles[]> {
    return of(ROLES);
  }

  getRole(id: number) {
    return of(ROLES.find(role => role.id_ === id));
  }
}
