import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scoreform',
  templateUrl: './scoreform.component.html'
})
export class ScoreformComponent  {
  public team1: string = 'rkc';
  public team2: string = 'lapa';
  public points = 2;
  @Output() submitted = new EventEmitter<object>();

  constructor() {
  }

  selected() {
    const returnData = {
      team1: this.team1,
      team2: this.team2,
      points: this.points,
    };
    console.log(returnData);
    this.submitted.emit(returnData);
  }

}
