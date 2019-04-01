import { Component, OnInit,  } from '@angular/core';
import { Feed } from "./shared/feed-model";
import { AxinomMovieService } from "./shared/axinom-movie.service";


@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  videos: Feed[] = [];

  constructor(private axinomMovieService: AxinomMovieService) { }
  
  ngOnInit() {
    this.axinomMovieService.getMovies()
    .subscribe(movies => this.videos = movies);
  }




}
