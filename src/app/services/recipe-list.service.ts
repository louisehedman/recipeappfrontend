import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  createRecipeList(name: string): Observable<any> {
    return this.http.post<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists', { name: name })
  }

  updateRecipeList(id: number, name: string, recipes_id: string): Observable<any> {
    return this.http.put<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id, { name: name, recipes_id: recipes_id})
  }

  deleteRecipeList(id: number): Observable<any> {
    return this.http.delete<any>('https://randomrecipeappu06.herokuapp.com/api/auth/recipe-lists/' + id)
  }
  
}
