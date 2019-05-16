import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }
  postMatchData = (matchData) => {
    console.log(matchData);
  }
}
