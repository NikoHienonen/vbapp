import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http-service.service';

interface Match {
  homeTeam: string;
  visitorTeam: string;
  result: string;
  victory: number;
}
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html'
})
export class MatchesComponent implements OnInit {
  public matches: Array<Match>;
  public errorMessage: string;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getMatches();
  }
  getMatches(): void {
    this.httpService.getMatches(result => {
      if (result === '404' || result.length === 0) {
        this.errorMessage = 'No matches found!';
      } else {
        this.matches = result;
      }
    });
  }
  deleteMatch(id: string): void {
    this.httpService.deleteMatch(id, result => {
      console.log(result);
      this.getMatches();
    });
  }
}
