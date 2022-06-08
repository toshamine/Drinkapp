import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { CocktailDetailsComponent } from './Pages/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './Pages/cocktail-list/cocktail-list.component';
import { CocktailSearchComponent } from './Pages/cocktail-search/cocktail-search.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    CocktailDetailsComponent,
    CocktailListComponent,
    CocktailSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
