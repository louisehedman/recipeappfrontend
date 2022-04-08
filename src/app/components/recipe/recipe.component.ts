import { Component, OnInit, Input } from '@angular/core';
import { RecipeService} from '../../services/recipe.service';
import { RecipeListService} from '../../services/recipe-list.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../../models/recipe';
import { RecipeList } from '../../models/recipeList';
import { ApiRecipe } from '../../models/apiRecipe';
import { AuthStateService } from '../../services/auth-state.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  private subscriptions = new Subscription();
  addRecipeForm!: FormGroup;
  recipe!: Recipe;
  recipes: any[] = [];
  isSignedIn!: boolean;
  allRecipeLists: RecipeList[] = [];
  recipeList!: RecipeList;
  recipeListId!: number;
  subscription!: Subscription;


  constructor(public recipeService: RecipeService, public recipeListService: RecipeListService, private route: ActivatedRoute, public router: Router, private auth: AuthStateService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.getOneRecipe();
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    })

    this.addRecipeForm = new FormGroup({
      recipeListId: new FormControl('', [Validators.required]),
      recipe_api_id: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      img: new FormControl('',[Validators.required]),
    })


  }

  getOneRecipe(): void {
    const id = this.route.snapshot.params['id'];
      this.recipeService.getOneRecipe(id).subscribe((data: Recipe) => {
        this.recipe = data;
        console.log(this.recipe);
      });

      this.recipeListId = this.route.snapshot.params['recipeListId'];
           
      this.recipeListService.getOneRecipeList(this.recipeListId).subscribe((data: RecipeList)=>{
        this.recipeList = data;
      });

      this.subscription = this.recipeListService.getAllRecipeLists()
    .subscribe((data: RecipeList[]) => {
      this.allRecipeLists = data;
      console.log(this.allRecipeLists);
    });
  }

  get f(){
    return this.addRecipeForm.controls;
  }

  onAddToList() {
    console.log(this.recipeListId, this.addRecipeForm.value);
    this.recipeListService.addRecipe(this.recipeListId, this.addRecipeForm.value).subscribe((res:any) => { 
      console.log('Recipe added successfully!');
    })
  }
}
  