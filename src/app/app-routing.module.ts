import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RecipeBrowseComponent } from './components/recipe-browse/recipe-browse.component';
import { RecipeComponent } from './components/recipe/recipe.component'
import { RecipeListsComponent} from './components/recipe-lists/recipe-lists.component'
import { RecipeListComponent } from './components/recipe-list/recipe-list.component'

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipe/:id', component: RecipeComponent},
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'recipes', component: RecipeBrowseComponent },
  { path: 'recipe-lists', component: RecipeListsComponent },
  { path: 'recipe-list', component: RecipeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
