import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Feed } from "../shared/feed-model";
import { AxinomMovieService } from "../shared/axinom-movie.service";

@Component({
  selector: 'movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  genre: string;
  videos: Feed[] = [];

  constructor(private route: ActivatedRoute, private axinomMovieService: AxinomMovieService) {
    this.genre = this.route.snapshot.params['genre'];
  }

  ngOnInit() {
    this.axinomMovieService.getMovies()
    .subscribe(videos => this.videos = videos);
  }
  
}
