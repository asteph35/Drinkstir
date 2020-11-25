import { Component, Input, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Cocktail } from '../cocktail/cocktail';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})

export class AllComponent {
  readonly ROOT_URL = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=";
  cocktails: Cocktail[] = [];
  
  constructor(private http: HttpClient){
  
    
  }
  ngOnInit(): void{
   
  };
 

public createCardElem(path: string){
  var category =  document.getElementById("table");
  if (category != null){
   category.style.display = "block";
  }
  this.http.get<Cocktail[]>(path).subscribe((data:any)=>{
   
    //not an error
    
   this.cocktails = data.drinks.map((x: any)=> Object.assign(new Cocktail(), x));
   
  var temp = document.getElementsByClassName("row");

  var table = document.getElementById("table") as HTMLElement;
  table.innerHTML = "";
  for (var i =0; i < this.cocktails.length; i++){
    this.cocktails[i].compileIngredients();
    if (i == 0){
      table.innerHTML = '<div class="row">';
    }
    if (i % 4 == 0 && i !=0){
      table.innerHTML += '</div>' + '<div class="row">'
    }
   
    temp[temp.length-1].innerHTML += '<div class="column">'+
    '<div class="card">'+
      '<app-cards ></app-cards>'+
    '<h2 style="text-align:center" class = "cardTitle" id = ""></h2>'+
    '<div class="card">' +
    '<img src="" alt="" style="width:100%" class = "thumbnail" id= "">' +
    '<div class="Ingredients">' +
      '</div>' +
      '<p><button>View Recipe</button></p>' +
    '</div>'+
    '</div>'+
  '</div>';
   
    
    document.getElementsByClassName("cardTitle")[i].id = i.toString();
    document.getElementsByClassName("cardTitle")[i].innerHTML = this.cocktails[i].strDrink;
    document.getElementsByClassName("thumbnail")[i].id = i.toString();
    document.getElementsByClassName("thumbnail")[i].setAttribute('src', this.cocktails[i].strDrinkThumb);
    document.getElementsByClassName("Ingredients")[i].id = i.toString();
    for (var x = 0; x < this.cocktails[i].Ingredients.length; x++){
      document.getElementsByClassName("Ingredients")[i].innerHTML +='<p>' + this.cocktails[i].Ingredients[x] +'</p>';
    }
  }
  var category =  document.getElementById("Category");
 if (category != null){
  category.style.display = "none";
 }
   
   
  }, err=>{
    console.log(err);
  })
  
  

}
public getCategory(){
  var category =  document.getElementById("table");
 if (category != null){
  category.style.display = "none";
 }
  var category =  document.getElementById("Category");
 if (category != null){
  category.style.display = "block";
 }

}
}
