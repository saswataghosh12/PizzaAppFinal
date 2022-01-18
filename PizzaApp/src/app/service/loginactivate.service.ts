import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginactivateService {
  constructor(private authService: StorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['']);
    }
    return true;
  }
}
