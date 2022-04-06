import { Component, OnInit } from '@angular/core';
import { RecipeListService} from '../../services/recipe-list.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { AuthStateService} from '../../services/auth-state.service';
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
  allRecipeLists: RecipeList[] = [];
  subscription!: Subscription;
  recipeList!: RecipeList;
  id!: number;
  recipes_id!: string;



  constructor(public recipeListService: RecipeListService, public fb: FormBuilder, public router: Router, private route: ActivatedRoute /*public auth: AuthStateService*/) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  
    this.subscription = this.recipeListService.getAllRecipeLists()
    .subscribe((data: RecipeList[]) => {
      this.allRecipeLists = data;
      console.log(this.allRecipeLists);
    });
  }

  get f(){
    return this.createForm.controls;
  }

  onSubmit(){
    console.log(this.createForm.value);
    this.recipeListService.createRecipeList(this.createForm.value).subscribe((res:any) => {
         console.log('List created successfully!');
    })
  }

  getOneList(): void {
    this.id = this.route.snapshot.params['recipeListId'];
         
    this.recipeListService.getOneRecipeList(this.id).subscribe((data: RecipeList)=>{
      this.recipeList = data;
    });
  }

  deleteList(id:number){
    this.recipeListService.deleteRecipeList(id).subscribe(res => {
         this.allRecipeLists = this.allRecipeLists.filter(recipeList => recipeList.id !== id);
         console.log('Recipe list deleted successfully!');
    })
  }

}


