import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  private errorMessage: string;
  constructor(private httpService: HttpService, private router: Router) { }
  ngOnInit() {
  }
  onSubmit(): void {
    const user = {username: this.username, password: this.password};
    this.httpService.login(user, result => {
      if(result === 'OK') {
        sessionStorage.setItem("user", this.username);
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = result;
      }
    });
  }
}
