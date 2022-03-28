import { Injectable } from '@angular/core';

// Recipe interface
export class Recipe {
  id!: Number;
  title!: String;
  ingredients!: String;
  instructions!: String;
}
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
}
