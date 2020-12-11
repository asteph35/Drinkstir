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
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import {UserService} from './user.service';
import {LogoutComponent} from './logout/logout.component';
import { UserAccComponent} from './user-acc/user-acc.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



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
    CocktailComponent,
  
    LogoutComponent,
    UserAccComponent,
    LoginComponent,
    RegisterComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'register',
        component: RegisterComponent
      },
     
      {
        path: 'login',
        component: LoginComponent
       
      },
      {
        path: 'my-bar',
        component: MyBarComponent,
        canActivate: [AuthGuard]
       
      },
      {
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [AuthGuard]
       
      },


    ])
    
  ],
  providers: [AuthGuard, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
