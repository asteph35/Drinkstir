import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AllComponent } from './all/all.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MyBarComponent } from './my-bar/my-bar.component';
import { FeaturedComponent } from './featured/featured.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/homepage', pathMatch: 'full' 
    
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'my-bar',
    component: MyBarComponent
  
  },

  {
    path: 'recipes',
    component: RecipesComponent
  },

  {
    path: 'all',
    component: AllComponent
  },

  {
    path: 'featured',
    component: FeaturedComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
