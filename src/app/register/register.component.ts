import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(event: any){
    event.preventDefault();
    const target = event.target;
    const errors= [];
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    const cpassword = target.querySelector('#cpassword').value;
    console.log(username, password)
   if (password != cpassword){
      errors.push("Passwords do not match");
   }

   //validation

   if(errors.length ===0){
    this.auth.registerUser(username, password).subscribe(data => {
      console.log(data)
      if(data.success){
        this.router.navigate(['login'])
      }
    })
   }
    console.log(username, password)
  }
}
