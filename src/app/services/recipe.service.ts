import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

// Recipe interface
export class Recipe {
  title!: String;
  instructions!: String;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiURL = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=88ae3946&app_key=731bdd1bb5afc3c6002f651f4059918c&mealType=Dinner'
  //'https://api.edamam.com/api/recipes/v2/bbfc1a248bd6fe277e35fe01027de91f?type=public&app_id=88ae3946&app_key=731bdd1bb5afc3c6002f651f4059918c'
  
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiURL)
  }
}
