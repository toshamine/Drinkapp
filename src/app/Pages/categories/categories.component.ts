import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories:any =[];
  constructor() { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories()
  {
   axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
   .then(res =>{
     this.categories=res.data.drinks;
     console.log(this.categories);
   })
   .catch(err =>{
     console.log(err);
   })
  }

  validcat(categorie:string)
  {
   if(categorie.indexOf("/")==-1)
   {
     return true;
   }
   else
   {
     return false;
   }
  }

}
