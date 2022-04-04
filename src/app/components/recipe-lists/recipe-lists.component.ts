import { Component, OnInit } from '@angular/core';
import { RecipeListService} from '../../services/recipe-list.service';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { AuthStateService} from '../../services/auth-state.service';
import { Recipe } from '../../models/recipe';
import { RecipeList } from '../../models/recipeList';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
  createForm!: FormGroup;
  name!: string;
  allRecipeLists: any = [];
  recipeListId!: number;
  recipeList!: RecipeList;
  isSignedIn!: boolean;
  recipes_id!: string;
  subscription!: Subscription;


  constructor(private recipeListService: RecipeListService, private formBuilder: FormBuilder, private router: Router, private auth: AuthStateService) { }

  ngOnInit(): void {
    /*this.createForm = this.formBuilder.group({
      name: '',
    });*/
    
    /*this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });*/


    this.createForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
    });

    //this.getAllRecipeLists();

    /*this.subscription = this.recipeListService.getAllRecipeLists()
    .subscribe((data: any) => {
      this.allRecipeLists = data;
    });*/
  }

 /* ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/

  get f(){
    return this.createForm.controls;
  }

  

  onSubmit() {
    console.log(this.createForm.value);
    this.recipeListService.createRecipeList(this.createForm.value).subscribe((res:any) => {
      console.log('Post created successfully!');
    });
    this.ngOnInit();
  }

  /*getAllRecipeLists(): void{
    this.recipeListService.getAllRecipeLists().subscribe((data: any) => {
      this.allRecipeLists = data;
      console.log(this.allRecipeLists);
    })
  }*/
}
