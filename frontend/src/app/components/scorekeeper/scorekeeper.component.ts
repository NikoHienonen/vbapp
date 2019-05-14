import { Component, OnInit } from '@angular/core';
import { ScoreformComponent } from '../scoreform/scoreform.component';

interface Team {
  name: string;
  points: number;
  roundsWon: number;
  hasWon: boolean;
}
interface FormValues {
  team1: string;
  team2: string;
  points: number;
}

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html'
})
export class ScorekeeperComponent implements OnInit {
  public team1: Team;
  public team2: Team;
  public points: number;
  public teamsSelected = false;
  public gameOver: boolean = false;
  public finalStandings: string;
  public winner: string;
  constructor() { }

  ngOnInit() {  }

  onSubmitted(returnData: FormValues) {
    this.team1 = {name: returnData.team1, points: 0, roundsWon: 0, hasWon: false };
    this.team2 = {name: returnData.team2, points: 0, roundsWon: 0, hasWon: false };
    this.points = returnData.points;
    this.teamsSelected = true;
  }
  addPoint = (team: Team) => {
    team.points++;
    this.checkRoundVictory(team);
  }
  substractPoint = (team: Team) => {
    if(team.points !== 0) {
      team.points--;
    }
  }
  checkRoundVictory = (team) => {
    if(team.points === this.points) {
        team.roundsWon++;
        if(team.roundsWon === 3) {
          this.winner = team.name;
          this.finalStandings = (team.name === this.team1.name 
          ? `${this.team1.roundsWon} - ${this.team2.roundsWon}`
          : `${this.team2.roundsWon} - ${this.team1.roundsWon}`
          );
          this.gameOver = true;
        } else {
          this.resetRound();
        }
    }
  }
  resetRound = () => {
    this.team1.points = 0;
    this.team2.points = 0;
  }
}
