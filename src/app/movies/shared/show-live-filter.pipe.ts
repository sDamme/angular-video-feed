import { Pipe, PipeTransform } from '@angular/core';
import { Feed } from "./feed-model";

@Pipe({
    name: 'showLive',
    pure: false
})
export class showLivePipe implements PipeTransform {
    transform(videos: Feed[], filter: string): Feed[] {
        if (!videos || !filter) {
            return videos;
        }
        return videos.filter(video => video.tags.includes(filter));
    }
}
