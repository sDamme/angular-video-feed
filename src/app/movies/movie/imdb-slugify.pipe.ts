import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'slugifyMovie'})
export class SlugifyMoviePipe implements PipeTransform {
  transform(value: string): string {
    return value? value.replace(/ /g, "+") : value;
  }
}