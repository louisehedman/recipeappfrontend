import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  /** @getAllRecipes() {
    throw new Error('Method not implemented.');
  }*/

  app_id = '88ae3946'
  app_key = '731bdd1bb5afc3c6002f651f4059918c'
  api_auth = "&app_id=" + this.app_id + '&app_key=' + this.app_key;
  //'https://api.edamam.com/api/recipes/v2?type=public&app_id=88ae3946&app_key=731bdd1bb5afc3c6002f651f4059918c'
  //apiURL = 'https://api.edamam.com/api/recipes/v2/bbfc1a248bd6fe277e35fe01027de91f?type=public&app_id=88ae3946&app_key=731bdd1bb5afc3c6002f651f4059918c&mealType=Dinner'
  //apiURL = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=88ae3946&app_key=731bdd1bb5afc3c6002f651f4059918c&mealType=Dinner'
  
  apiURL = 'https://api.edamam.com/api/recipes/v2?app_key=731bdd1bb5afc3c6002f651f4059918c&mealType=Dinner&_cont=CHcVQBtNNQphDmgVQntAEX4BY0t3AwEVX3dDCzYWYlwmAwpUEDFBBzRFMVYmAlYBRTdGVTATagdxUhFqX3cWQT1OcV9xBB8VADQWVhFCPwoxXVZEITQeVDcBaR4-SQ%3D%3D&type=public&app_id=88ae3946'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map(res => res.hits.map((res: { recipe: any; }) => res.recipe))
    );
  }

}
