import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  private loggedIn: boolean = false;
  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }
  login(): void {
    const user = {username: this.username, password: this.password};
    this.httpService.login(user);
  }
}
