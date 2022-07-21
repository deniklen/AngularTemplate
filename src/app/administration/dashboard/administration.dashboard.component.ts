import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
    selector: 'administration-dashboard',
    templateUrl: './administration.dashboard.component.html'
})
export class AdministrationDashboardComponent {


    constructor(private http: HttpClient) { }

    ngOnInit() {

    }

    testic()  {
        this.http.get("https://httpbin.org/get").subscribe( (data) => {
          console.log(data)
        });
      }
}
