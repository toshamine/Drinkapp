import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { CocktailDetailsComponent } from './Pages/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './Pages/cocktail-list/cocktail-list.component';
import { CocktailSearchComponent } from './Pages/cocktail-search/cocktail-search.component';

const routes: Routes = [
{path:"",redirectTo:"Categories",pathMatch:"full"},
{path:"Categories",component:CategoriesComponent},
{path:"Cocktail/Details/:id",component:CocktailDetailsComponent},
{path:"Cocktail/List/:nomC",component:CocktailListComponent},
{path:"Cocktail/Search",component:CocktailSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
