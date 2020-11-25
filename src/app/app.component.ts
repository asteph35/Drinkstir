import { Component, OnInit, ViewChildren } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Cocktail} from './cocktail/cocktail';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  title = 'drinkstir';
  

  constructor(){
  
    
  }
  ngOnInit(): void {
  
  };
  

}
