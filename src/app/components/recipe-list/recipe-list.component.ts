import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeListService } from 'src/app/services/recipe-list.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeList } from '../../models/recipeList';
import { Recipe } from '../../models/recipe';
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

constructor(public recipeListService: RecipeListService, public recipeService: RecipeService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
      this.recipeListId = this.route.snapshot.params['recipeListId'];
           
      this.recipeListService.getOneRecipeList(this.recipeListId).subscribe((data: RecipeList)=>{
        this.recipeList = data;
      });
  

  }

}
