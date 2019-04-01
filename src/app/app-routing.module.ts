import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "./movies/movies.component";
import { MovieCategoryComponent } from "./movies/movie-category/movie-category.component";
import { MovieComponent } from "./movies/movie/movie.component";



const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:genre', component: MovieCategoryComponent },
  { path: 'movie/:asset', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
