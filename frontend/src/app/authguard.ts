import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginActivate implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!sessionStorage.getItem('user')) {
      this.router.navigate(['login']);
    }
    return true;
  }
}
