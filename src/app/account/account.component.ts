import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  title = 'personalBudgetApp';
  data = [];
  constructor(private http: HttpClient) {
    this.http.get('db-mysql-nyc1-77368-do-user-8345208-0.b.db.ondigitalocean.com').subscribe(data => {

    console.log(this.data);
   
    
    }, error => console.error(error));
  }


}
