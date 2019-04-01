import { Component, OnInit } from '@angular/core';
import { Movie } from "../shared/movie-model";
import { AxinomMovieService } from "../shared/axinom-movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-asset',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  

  asset: Movie[] = [];
  imageUrl: string = "http://media.cms.showcase.axtest.net/api/storage/publish/movies/" + this.route.snapshot.params['asset'] + "/cover/small_video_list.png";
  stream = {
    source: 'https://test.playready.microsoft.com/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/Manifest',
    licenseServers: {
        'com.microsoft.playready': {
            serverURL: 'https://test.playready.microsoft.com/service/rightsmanager.asmx'
        }
    }  
  }
  constructor(private axinomMovieService: AxinomMovieService, private route: ActivatedRoute) { }

  ngOnInit() {

  this.axinomMovieService.getMovie(this.route.snapshot.params['asset'])
    .subscribe(asset => this.asset = asset);
  }

  
}
