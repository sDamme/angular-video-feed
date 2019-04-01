import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieCategoryComponent } from './movies/movie-category/movie-category.component';
import { CategoryFilterPipe } from "./movies/shared/category-page-filter.pipe";
import { showGenrePipe } from "./movies/shared/show-genre-filter.pipe";
import { showLivePipe } from "./movies/shared/show-live-filter.pipe";
import { MovieComponent } from './movies/movie/movie.component';
import { VideoSliderComponent } from "./movies/video-slider.component";
import { VideoSliderDirective } from './movies/video-slider.directive';
import { SlugifyMoviePipe } from "./movies/movie/imdb-slugify.pipe";
import { VgCoreModule} from 'videogular2/core';
import { VgControlsModule} from 'videogular2/controls';
import { VgStreamingModule } from 'videogular2/streaming';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    showGenrePipe,
    showLivePipe,
    MovieCategoryComponent,
    CategoryFilterPipe,
    MovieComponent,
    VideoSliderComponent,
    VideoSliderDirective,
    SlugifyMoviePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgStreamingModule,
    LazyLoadImagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
