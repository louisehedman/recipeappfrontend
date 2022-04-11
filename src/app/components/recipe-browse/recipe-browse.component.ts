import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-recipe-browse',
  templateUrl: './recipe-browse.component.html',
  styleUrls: ['./recipe-browse.component.css']
})


export class RecipeBrowseComponent implements OnInit {
  recipes: any[] = [];
  shownRecipes: any[] = [];
  isSignedIn!: boolean;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute, public router: Router, private auth: AuthStateService) { }
  
  ngOnInit(): void {
    this.getAllRecipes();
    
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  } 

  // get 50 random recipes
  getAllRecipes(): void{
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      this.shownRecipes = data;
      console.log(this.recipes);
    })
  }

  // filter recipes

  dietVegan() {
    this.shownRecipes = this.recipes.filter((recipe) => recipe.vegan);
    console.log(this.recipes);
  }

  dietGlutenFree() {
    this.shownRecipes = this.recipes.filter((recipe) => recipe.glutenFree);
  }

  dietDairyFree() {
    this.shownRecipes = this.recipes.filter((recipe) => recipe.dairyFree);
  }

  dishType(dishType: any) {
    this.shownRecipes = this.recipes.filter((recipe) => recipe.dishTypes.includes(dishType));
  }

  filterReset() {
    this.shownRecipes = this.recipes;
  }
}
