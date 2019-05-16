import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '<button class="submit" (click)="onClick()">Logout</button>'
})
export class LogoutComponent {

  constructor(private router: Router) { }

  onClick() {
    sessionStorage.clear();
    //window.location.reload(true);
    this.router.navigate(['/login']);
    //window.location.reload(true);
  }

}
