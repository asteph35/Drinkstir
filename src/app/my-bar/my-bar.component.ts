import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

import {AuthService} from '../auth.service';
import {UserService} from '../user.service';
@Component({
  selector: 'app-my-bar',
  templateUrl: './my-bar.component.html',
  styleUrls: ['./my-bar.component.css']
})
export class MyBarComponent implements OnInit {
  message = "Welcome to your account!"
  email ="Getting your email. . ."
  ingredients = ["Getting your ingredients"]
  constructor(private user: UserService,private auth: AuthService, private router: Router) { }

  ngOnInit(): void{

    if (!this.user.isLoggedIn()){
      this.router.navigate(['account'])

    }
    else{
      this.user.getData().subscribe(data => {
        if(this.user.isLoggedIn()){
      
        this.email = data.email
        this.ingredients = data.ingredients
        var HTML = "<table border=1 width=100%><tr><th>Ingredients</th></tr>"
         for(var i =0; i < this.ingredients.length; i++){
           HTML += '<tr><td>'+ this.ingredients[i]+'</td></tr>'
         
     
         } 
         try{
       var entry=  document.getElementById('entry')
       if(entry != null){
        entry.innerHTML+= HTML
       }
     
         }
         catch(err){

         }

        }if(data.status == false){
          this.router.navigate(['logout'])
        }
       })
    }
  }
  openForm() {
   
    var temp = document.getElementById('myForm');
     if(temp != null){
      temp.style.display = "block" 
     }
  }
  
 closeForm(){
  
  var temp = document.getElementById("myForm");
  if(temp != null){
    temp.style.display = "none" 
   }
  }
  addIngredient(event: any){
   event.preventDefault();
    const target = event.target;
  
    const ingredient = target.querySelector('#ing').value;
    
    this.auth.addUserIngredient(ingredient).subscribe(data => {
      console.log(ingredient)
     
      
    })
    
    target.querySelector('#ing').value = "Start Typing here. . .";
    this.router.navigateByUrl("/",{ skipLocationChange: true})
    .then(() => this.router.navigateByUrl('/my-bar'))
  }
 
  
}
