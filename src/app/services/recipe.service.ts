import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  api_key = 'a2fb12d2cc514e6298ef23ceeb46b1d0'
  api_auth = '&apiKey=' + this.api_key;
  apiURL = 'https://api.spoonacular.com/recipes'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/random?number=50' + this.api_auth).pipe(
      map((result) => result.recipes));
  }

  getOneRecipe(id: number): Observable<any> {
    return this.http.get<any>(this.apiURL + '/' + id + '/information?' + this.api_auth)
  }

  
}
