import { Component, OnInit } from '@angular/core';
import { ScoreformComponent } from '../scoreform/scoreform.component';

interface Team {
  name: string;
  points: number;
  hasWon: boolean;
}

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html'
})
export class ScorekeeperComponent implements OnInit {
  team1: Team;
  team2: Team;
  public teamsSelected = false;
  public data: object;
  constructor() { }

  ngOnInit() {  }

  onSubmitted(returnData: object) {
    console.log(returnData);
    this.data = returnData;
    this.teamsSelected = true;
  }

}
