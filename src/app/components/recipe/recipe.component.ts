import { Component, OnInit, Input } from '@angular/core';
import { RecipeService} from '../../services/recipe.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../../models/recipe';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  private subscriptions = new Subscription();

  recipe!: Recipe;


  constructor(public recipeService: RecipeService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.getOneRecipe();
  }

  getOneRecipe(): void {
    const id = this.route.snapshot.params['id'];
      this.recipeService.getOneRecipe(id).subscribe((data: Recipe) => {
        this.recipe = data;
        console.log(this.recipe);
      })
  }
}
  