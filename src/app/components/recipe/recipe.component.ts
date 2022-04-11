import { Component, OnInit, Input } from '@angular/core';
import { RecipeService} from '../../services/recipe.service';
import { RecipeListService} from '../../services/recipe-list.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe, ExtendedIngredient } from '../../models/recipe';
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

  @Input() data!: Recipe;
  private subscriptions = new Subscription();
  addRecipeForm!: FormGroup;
  apiRecipe!: ApiRecipe;
  recipe!: Recipe;
  extendedIngredients: ExtendedIngredient[] = [];
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

    // input
    this.apiRecipe = {
      id: null,
      recipe_api_id: this.data.id,
      title: this.data.title,
      img: this.data.image,
    };
    console.log("inside onInit: ", this.apiRecipe);
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

      // get a users all recipe lists to choose from
      this.subscription = this.recipeListService.getAllRecipeLists()
    .subscribe((data: RecipeList[]) => {
      this.allRecipeLists = data;
      console.log(this.allRecipeLists);
    });
  }

  // add recipe to a list 
  onAddToList(recipeListId: number, apiRecipe: any) {
    console.log(this.recipeListId, this.apiRecipe, "input param: ", recipeListId);
    this.recipeListService.addRecipe(recipeListId, apiRecipe).subscribe((res:any) => { 
      console.log('res: ', res);
    })
  }
}
  