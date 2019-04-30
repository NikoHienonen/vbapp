import { Component, OnInit } from '@angular/core';
import { ScoreformComponent } from '../scoreform/scoreform.component';

interface Team {
  name: string;
  points: number;
  hasWon: boolean;
}
interface FormValues {
  team1: string;
  team2: string;
  points: number;
  cap: boolean;
}

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html'
})
export class ScorekeeperComponent implements OnInit {
  public team1: Team;
  public team2: Team;
  public points: number;
  public cap: boolean;
  public teamsSelected = false;
  public gameOver: boolean = false;
  public winner: string;
  constructor() { }

  ngOnInit() {  }

  onSubmitted(returnData: FormValues) {
    this.team1 = {name: returnData.team1, points: 0, hasWon: false };
    this.team2 = {name: returnData.team2, points: 0, hasWon: false };
    this.points = returnData.points;
    this.cap = returnData.cap;
    this.teamsSelected = true;
  }
  addPoint = (team: Team) => {
    team.points++;
    this.checkVictory(team);
  }
  checkVictory = (team) => {
    if(team.points === this.points) {
      team.hasWon = true;
      this.gameOver = true;
      this.winner = team.name;
    }
  }
  substractPoint = (team: Team) => {
    if(team.points !== 0) {
      team.points--;
    }
  }
}
