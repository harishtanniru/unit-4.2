import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getBatsMans() {
    this.apiService.getBatsMans().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getBowlers() {
    this.apiService.getBowlers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByWickets() {
    this.apiService.getPlayersByWickets().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getHighestHundreds() {
    this.apiService.getHighestHundreds().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getAllRounder() {
    this.apiService.getAllRounder().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-batsmans') {
      this.getBatsMans();
    } else if (value === 'get-bowlers') {
      this.getBowlers();
    } else if (value === 'get-players-by-wickets') {
      this.getPlayersByWickets();
    } else if (value === 'get-highest-hundreds') {
      this.getHighestHundreds();
    } else if (value === 'get-all-rounder') {
      this.getAllRounder();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
