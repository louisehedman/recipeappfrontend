import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeListService } from 'src/app/services/recipe-list.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeList } from '../../models/recipeList';
import { Recipe } from '../../models/recipe';
import { ApiRecipe, ApiRecipes } from '../../models/apiRecipe';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipeListId!: number;
apiRecipeId!: number;
recipesId: any = [];
recipeList!: RecipeList;
allListRecipes!: ApiRecipes['recipes'];
apiRecipe!: ApiRecipe[];
recipe: Recipe[] = [];
isSignedIn!: boolean;
updateForm!: FormGroup;
id!: number;
subscription!: Subscription;

constructor(public recipeListService: RecipeListService, public recipeService: RecipeService, public route: ActivatedRoute, public router: Router, public auth: AuthStateService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });

    // Form for updating list name
    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    })

      this.recipeListId = this.route.snapshot.params['recipeListId'];
      
      // Get all recipes in list
      this.subscription = this.recipeListService.getAllListRecipes(this.recipeListId)
      .subscribe((data: ApiRecipe[]) => {
      this.allListRecipes = data;
      console.log(data)
    });
                 
      this.recipeListService.getOneRecipeList(this.recipeListId).subscribe((data: RecipeList)=>{
        this.recipeList = data;
    });
  }

  get f(){
    return this.updateForm.controls;
  }

  // update list name
  onUpdate(){
    console.log(this.updateForm.value);
    this.recipeListService.updateRecipeList(this.recipeListId, this.updateForm.value).subscribe((res:any) => {
         console.log('List name updated successfully!');
         this.ngOnInit();
    })
  }

  // Delete recipe from list and update
  onDeleteRecipe(recipeListId: number, apiRecipeId: any) {
    this.recipeListService.deleteRecipe(recipeListId, apiRecipeId).subscribe((res:any) => {
      console.log('Recipe deleted successfully!');
      this.ngOnInit();
 });
    
  }
}
