import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeListService } from 'src/app/services/recipe-list.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeList } from '../../models/recipeList';
import { Recipe } from '../../models/recipe';
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
recipesId: any = [];
recipeList!: RecipeList;
recipe: Recipe[] = [];
recipe_api_id!: number;
isSignedIn!: boolean;
updateForm!: FormGroup;
id!: number;

constructor(public recipeListService: RecipeListService, public recipeService: RecipeService, public route: ActivatedRoute, public router: Router, public auth: AuthStateService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });

    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    })

      this.recipeListId = this.route.snapshot.params['recipeListId'];
           
      this.recipeListService.getOneRecipeList(this.recipeListId).subscribe((data: RecipeList)=>{
        this.recipeList = data;
      });
  

  }

  get f(){
    return this.updateForm.controls;
  }

  onUpdate(){
    console.log(this.updateForm.value);
    this.recipeListService.updateRecipeList(this.recipeListId, this.updateForm.value).subscribe((res:any) => {
         console.log('List name updated successfully!');
    })

  }

}
