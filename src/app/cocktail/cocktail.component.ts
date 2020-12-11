import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  idDrink = 0;
  strDrink = "";
  strCategory = "";
  strInstructions = "";
  strDrinkThumb = "";
  strIngredient1 ="";
  strIngredient2 ="";
  strIngredient3 ="";
  strIngredient4 ="";
  strIngredient5 ="";
  strIngredient6 ="";
  strIngredient7 ="";
  strIngredient8 ="";
  strIngredient9 ="";
  strIngredient10 ="";
  strIngredient11 ="";
  strIngredient12 ="";
  strIngredient13 ="";
  strIngredient14 ="";
  strIngredient15 ="";
  Ingredients: string[];
 
  constructor() {
 

   }

  ngOnInit(): void {
    

  }
 
  compileIngredients(){
      this.Ingredients[0] = this.strIngredient1;
      this.Ingredients[1] = this.strIngredient2;
      this.Ingredients[2] = this.strIngredient3;
      this.Ingredients[3] = this.strIngredient4;
      this.Ingredients[4] = this.strIngredient5;
      this.Ingredients[5] = this.strIngredient6;
      this.Ingredients[6] = this.strIngredient7;
      this.Ingredients[7] = this.strIngredient8;
      this.Ingredients[8] = this.strIngredient9;
      this.Ingredients[9] = this.strIngredient10;
      this.Ingredients[10] = this.strIngredient11;
      this.Ingredients[11] = this.strIngredient12;
      this.Ingredients[12] = this.strIngredient13;
      this.Ingredients[13] = this.strIngredient14;
      this.Ingredients[14] = this.strIngredient15;
      this.Ingredients.forEach(element => {
        console.log(element)
      });
      this.deNullify();
  }
  deNullify(){
    this.Ingredients = this.Ingredients.filter(function (el){
      return el !=null;
    });
    
  }
  
}
