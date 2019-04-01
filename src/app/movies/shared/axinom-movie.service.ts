import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Feed } from "./feed-model";
import { Movie } from "./movie-model";
import { Cacheable } from 'ngx-cacheable';




@Injectable({
  providedIn: 'root'
})
export class AxinomMovieService {

  private axinomContentUrl = 'http://media.cms.showcase.axtest.net/api/storage/publish/movies/';

  constructor(private http: HttpClient) { }
  
    /** GET data from API and cache the results */
    @Cacheable()
    getMovies(): Observable<Feed[]> {
      return this.http.get<Feed[]>(this.axinomContentUrl + '_catalog.json')  
    }

    getMovie(movie): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.axinomContentUrl + movie + '/metadata.json' )
    }

}
