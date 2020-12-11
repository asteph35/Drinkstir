import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cocktail } from '../cocktail/cocktail';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  readonly ROOT_URL = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=";
  baseURL = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=";
  cocktails: Cocktail[] = [];
  ingredients = ["Getting your ingredients"]
  constructor(private http: HttpClient, private user: UserService,private auth: AuthService, private router: Router) { }
  Ingredients: string[];
  ngOnInit(): void {
    if (!this.user.isLoggedIn()){
      this.router.navigate(['account'])

    }
    else{
      this.user.getData().subscribe(data => {
        if(this.user.isLoggedIn()){
          
        
        this.ingredients = data.ingredients
        
       // var newPath = this.ingredients[0];
       // for(var i = 1; i < this.ingredients.length; i++){
       // newPath =  newPath.concat(",",this.ingredients[i].toString())
       
      //  }
      //  this.baseURL = this.baseURL.concat(newPath.toString());
      //  
       // console.log(this.baseURL)

      this.createCardElem(this.ROOT_URL)


        }if(data.status == false){
          this.router.navigate(['logout'])
        }
       })
    }
  }

  public createCardElem(path: string){
    var category =  document.getElementById("table");
    if (category != null){
     category.style.display = "block";
    }
    this.http.get<Cocktail[]>(path).subscribe((data:any)=>{
     
      //not an error
      
     this.cocktails = data.drinks.map((x: any)=> Object.assign((new Cocktail() , x) ));
     var newList =[];
     
     for(var i =0; i < this.cocktails.length; i++){
       this.compileIngredients(this.cocktails[i])
      //this.cocktails[i].compileIngredients();
      var canAdd = true;
       for(var j=0; j< this.Ingredients.length;j++){

        if(!(this.ingredients.includes(this.Ingredients[j]))){
          
            canAdd = false;
         
         }
         
        }
        
        if(canAdd == true){
          
         newList.push(this.cocktails[i])
         console.log("add")

      }
      
     }
     this.cocktails = newList
  
    var temp = document.getElementsByClassName("row");
  
    var table = document.getElementById("table") as HTMLElement;
    table.innerHTML = "";
    for (var i =0; i < this.cocktails.length; i++){
      //this.cocktails[i].compileIngredients();
      this.compileIngredients(this.cocktails[i])
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
     // for (var x = 0; x < this.cocktails[i].Ingredients.length; x++){
      //  document.getElementsByClassName("Ingredients")[i].innerHTML +='<p>' + this.cocktails[i].Ingredients[x] +'</p>';
     // }
    }
    var category =  document.getElementById("Category");
   if (category != null){
    category.style.display = "none";
   }
     
     
    }, err=>{
      console.log(err);
    })
    
    
  
  }
  compileIngredients(c: Cocktail){
   this.Ingredients = [];
   this.Ingredients.push(c.strIngredient1);
   this.Ingredients.push(c.strIngredient2);
   this.Ingredients.push(c.strIngredient3);
   this.Ingredients.push( c.strIngredient4);
   this.Ingredients.push(c.strIngredient5);
   this.Ingredients.push(c.strIngredient6);
   this.Ingredients.push(c.strIngredient7);
   this.Ingredients.push(c.strIngredient8);
   this.Ingredients.push(c.strIngredient9);
   this.Ingredients.push(c.strIngredient10);
   this.Ingredients.push(c.strIngredient11);
   this.Ingredients.push(c.strIngredient12);
   this.Ingredients.push(c.strIngredient13);
   this.Ingredients.push(c.strIngredient14);
   this.Ingredients.push(c.strIngredient15);
  
   this.Ingredients = this.Ingredients.filter(function (el) {
    return el != null;
  });
  
    
}



}
