import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import { environment } from '/environments/environment';
import { environment } from 'src/environments/environment.prod'
import { Recipe } from '../models/recipe';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  api_key = 'a2fb12d2cc514e6298ef23ceeb46b1d0'
  api_auth = '&apiKey=' + this.api_key
  apiURL = 'https://api.spoonacular.com/recipes'

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

  getAllRecipeLists(): Observable<any> {
    return this.http.get<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists')
  }

  getOneRecipeList(id: number): Observable<any> {
    return this.http.get<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id)
  }

  createRecipeList(name: string): Observable<any> {
    return this.http.post<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists', { name: name})
  }

  updateRecipeList(id: number, name: string, recipes_id: string): Observable<any> {
    return this.http.put<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id, {name: name, recipes_id: recipes_id})
  }

  deleteRecipeList(id: number): Observable<any> {
    return this.http.delete<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id)
  }
  
}
