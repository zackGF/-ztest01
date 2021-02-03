import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {EntranceService} from "./entrance.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private entranceService: EntranceService
  ) {
  }

  canActivate() {
    let token = window.localStorage.getItem('auth_token');

    let user = this.entranceService.getUserByToken(token);

    if (!token) {
      this.router.navigate(['/entrance'])
      return false;
    }

    if (!user) {
      this.router.navigate(['/entrance'])
      return false;
    }

    return true;

  }

}
