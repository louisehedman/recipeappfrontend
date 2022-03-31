import { Component, Input, OnInit } from '@angular/core';
import { RecipeService} from '../../services/recipe.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Recipe } from '../../models/recipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-browse',
  templateUrl: './recipe-browse.component.html',
  styleUrls: ['./recipe-browse.component.css']
})
export class RecipeBrowseComponent implements OnInit {
  recipes: any[] = [];
  
  //private subscriptions = new Subscription();
  
  constructor(public recipeService: RecipeService, private route: ActivatedRoute, public router: Router) { }
  
  ngOnInit(): void {
    this.getAllRecipes();
  } 

  getAllRecipes(): void{
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      console.log(this.recipes);
    })
  }
}
