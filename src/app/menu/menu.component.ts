import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {UserService} from '../user.service';
import { AccountComponent } from '../account/account.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit(){
  

}
}
