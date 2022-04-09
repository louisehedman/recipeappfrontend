import { Component, Input, OnInit } from '@angular/core';
import { RecipeService} from '../../services/recipe.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';
import { Recipe } from '../../models/recipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-browse',
  templateUrl: './recipe-browse.component.html',
  styleUrls: ['./recipe-browse.component.css']
})
export class RecipeBrowseComponent implements OnInit {
  recipes: any[] = [];
  isSignedIn!: boolean;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute, public router: Router, private auth: AuthStateService) { }
  
  ngOnInit(): void {
    this.getAllRecipes();
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });

  } 

  getAllRecipes(): void{
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      console.log(this.recipes);
    })
  }

  resetAllFilters() {
  }

  dietVegan() {
    this.recipes = [...this.recipes.filter((recipe) => recipe.vegan)];
    console.log(this.recipes);
  }

  dietGlutenFree() {
    this.recipes = [...this.recipes.filter((recipe) => recipe.glutenFree)];
  }

  dietDairyFree() {
    this.recipes = [...this.recipes.filter((recipe) => recipe.dairyFree)];
  }

  dishType(dishType: any) {
    this.recipes = [...this.recipes.filter((recipe) => recipe.dishTypes.includes(dishType))];
  }
}
