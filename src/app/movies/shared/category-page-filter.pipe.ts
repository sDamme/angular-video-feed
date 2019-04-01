import { Pipe, PipeTransform } from '@angular/core';
import { Feed } from "./feed-model";
import { ActivatedRoute } from "@angular/router";
@Pipe({
    name: 'getVideoGenre',
    pure: false
})
export class CategoryFilterPipe implements PipeTransform {
    genre: string;
    constructor(private route: ActivatedRoute) {
        this.genre = this.route.snapshot.params['genre']
      }
    
    
    transform(videos: Feed[]): Feed[] {
        this.genre = this.route.snapshot.params['genre'];
        let capitalizegenre = this.genre.charAt(0).toUpperCase() + this.genre.slice(1);
        
        return videos.filter(video => video.genres.includes(capitalizegenre));
    }
}
