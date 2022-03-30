import { Component, Input, OnInit } from '@angular/core';
import { RecipeService} from '../../services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-browse',
  templateUrl: './recipe-browse.component.html',
  styleUrls: ['./recipe-browse.component.css']
})
export class RecipeBrowseComponent implements OnInit {
  recipes: Recipe[] = [];
  //private subscriptions = new Subscription();
  
  constructor(public recipeService: RecipeService, public router: Router) { }
  
  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((data: Recipe[])=>{
      this.recipes = data;
      console.log(this.recipes);
    });
  }


 
}
