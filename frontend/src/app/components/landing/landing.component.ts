import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  public user: string;
  constructor() { }

  ngOnInit() {
    this.user = sessionStorage.getItem("user");
  }

}
