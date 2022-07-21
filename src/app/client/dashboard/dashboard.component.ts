import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  testic()  {
    this.http.get("https://httpbin.org/get").subscribe( (data) => {
      console.log(data)
    });
  }
}
