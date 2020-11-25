import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyBarComponent } from './my-bar/my-bar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AllComponent } from './all/all.component';
import { FeaturedComponent } from './featured/featured.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './cards/cards.component';
import {AccountComponent} from './account/account.component';
import {IngredientComponent } from './ingredient/ingredient.component';
import {CocktailComponent} from './cocktail/cocktail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MyBarComponent,
    RecipesComponent,
    AllComponent,
    FeaturedComponent,
    MenuComponent,
    CardsComponent,
    IngredientComponent,
    AccountComponent,
    CocktailComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
