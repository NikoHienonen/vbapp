import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = 'http://localhost:8080/';
  constructor() { }
  postMatchData = (matchData) => {
    console.log(matchData);
  }
  login(user) {
    axios.post(this.url+'login', user)
    .then(response => {
      console.log(response);
    })
  }
}
