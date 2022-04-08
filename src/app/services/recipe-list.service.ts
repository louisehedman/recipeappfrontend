import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RecipeList } from '../models/recipeList';
import { ApiRecipe } from '../models/apiRecipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllRecipeLists(): Observable<any> {
    return this.http.get<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists')
  }

  getOneRecipeList(id: number): Observable<any> {
    return this.http.get<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id)
  }

  createRecipeList(name: string): Observable<RecipeList>{
    return this.http.post<RecipeList>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists', JSON.stringify(name), this.httpOptions)
  }

  updateRecipeList(id: number, recipeList: any): Observable<RecipeList> {
    return this.http.put<RecipeList>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id, JSON.stringify(recipeList), this.httpOptions)
  }

  deleteRecipeList(id: number): Observable<any> {
    return this.http.delete<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id)
  }

  getAllListRecipes(id: number | string): Observable<ApiRecipe[]> {
    return this.http.get<any['recipes']>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-list/' + id).pipe(
      map((result: { recipes: any; }) => result.recipes));
  }
  
  addRecipe(id: number | string, apiRecipe: ApiRecipe): Observable<any> {
    return this.http.post<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-list/' + id, apiRecipe)
  }

  deleteRecipe(recipeListId: number, apiRecipeId: number): Observable<any> {
    return this.http.delete<any>('https://randomrecipeappu06.herokuapp.com/api/auth/' + recipeListId + '/recipes/' + apiRecipeId)
  }
}
