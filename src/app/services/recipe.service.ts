import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: any = [];
  recipeList: any;

  api_auth = '&apiKey=' + environment.api_key;
  apiURL = 'https://api.spoonacular.com/recipes';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) {
   }

  getAllRecipes(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/random?number=50' + this.api_auth).pipe(
      map((result) => result.recipes));
  }

  getOneRecipe(id: number): Observable<any> {
    return this.http.get<any>(this.apiURL + '/' + id + '/information?' + this.api_auth)
  }
}
