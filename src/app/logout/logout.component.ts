import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private router: Router, private auth: AuthService) { }

  ngOnInit(){
    this.user.logout().subscribe(data=>{
      console.log(data.success)
      if (data.success){
        this.router.navigate(['account'])
        this.auth.setLoggedIn(false)
      }else{
        window.alert('Some Problem');
      }
    })
  }

}
