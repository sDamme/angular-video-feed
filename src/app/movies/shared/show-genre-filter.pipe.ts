import { Pipe, PipeTransform } from '@angular/core';
import { Feed } from "./feed-model";

@Pipe({
    name: 'showGenre',
    pure: false
})
export class showGenrePipe implements PipeTransform {
    transform(videos: Feed[], filter: string): Feed[] {
        if (!videos || !filter) {
            return videos;
        }
        return videos.filter(video => video.genres.includes(filter));
    }
}
