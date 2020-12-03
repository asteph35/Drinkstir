import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user-acc',
  templateUrl: './user-acc.component.html',
  styleUrls: ['./user-acc.component.css']
})
export class UserAccComponent implements OnInit {
  message = "Welcome to your account!"
  email ="Getting your email. . ."
  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
   this.user.getData().subscribe(data => {
    if(data.status){
  
    this.email = data.email
    }else{
      this.router.navigate(['logout'])
    }
   })
  }

}
