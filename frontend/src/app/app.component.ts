import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public user: string;
  constructor(){}
  ngOnInit() {
    this.user = sessionStorage.getItem("user");
  }
}
