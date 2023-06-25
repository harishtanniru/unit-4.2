import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getBatsMans() {
    return this.http.get('http://localhost:3000/get-batsmans');
  }
  public getBowlers() {
    return this.http.get('http://localhost:3000/get-bowlers');
  }
  public getPlayersByWickets() {
    return this.http.get('http://localhost:3000/get-players-by-wickets');
  }
  public getHighestHundreds() {
    return this.http.get('http://localhost:3000/get-highest-hundreds');
  }
  public getAllRounder() {
    return this.http.get('http://localhost:3000/get-all-rounder');
  }
}
