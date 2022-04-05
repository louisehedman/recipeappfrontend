import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RecipeList } from '../models/recipeList';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  //recipeList: any = [];

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

  updateRecipeList(id: number, name: string, recipes_id: string): Observable<any> {
    return this.http.put<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id, { name: name, recipes_id: recipes_id})
  }

  deleteRecipeList(id: number): Observable<any> {
    return this.http.delete<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id)
  }
  
}
