import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router){

  }

  ngOnInit(){
    if(this.Auth.isLoggedIn){
      this.router.navigate(['admin'])
    }
  }
  loginUser(event: any){
    event.preventDefault();
    const target = event.target;

    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(username, password).subscribe((data : any) => {
      if (data.success){
       
        this.router.navigate(['my-bar']);
        this.Auth.setLoggedIn(true);
      } else{
        window.alert(data.message)
        
      }
    })
    
  }
}
