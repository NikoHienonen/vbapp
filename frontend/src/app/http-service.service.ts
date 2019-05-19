import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://localhost:8080/';
  constructor() { }
  postMatch = (matchData, callback) => {
    axios.post(this.url + 'matches', matchData)
    .then(response => {
      callback(response);
    });
  }
  getMatches(callback): void {
    axios.get(this.url + 'matches')
    .then(response => {
      callback(response.data);
    });
  }
  deleteMatch(id, callback): void {
    axios.delete(this.url + 'matches/' + id)
    .then(response => {
      callback(response.data);
    });
  }
  login(user, callback): void {
    axios.post(this.url + 'login', user)
    .then(response => {
      callback(response.data);
    });
  }
}
