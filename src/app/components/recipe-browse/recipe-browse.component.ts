import { Component, Input, OnInit } from '@angular/core';
import { RecipeService} from '../../services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-browse',
  templateUrl: './recipe-browse.component.html',
  styleUrls: ['./recipe-browse.component.css']
})
export class RecipeBrowseComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
