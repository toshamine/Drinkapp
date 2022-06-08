import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {


  id:number=0;
  details:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params["id"];
   this.getdetails();
  }

  getdetails()
  {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+this.id)
    .then(res =>{
     this.details=res.data.drinks[0];
     console.log(this.details)
    })
    .catch(err =>{
      console.log(err);
    })
  }

}
