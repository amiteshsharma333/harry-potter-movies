import { Pipe, PipeTransform } from '@angular/core';
import { MovieInfo } from '../model/harry-potter-movie.model';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(
    value: MovieInfo[],
    title: string,
    releaseYear: number | undefined
  ): MovieInfo[] {
    //if filters are empty
    if (
      (title == '' || title == undefined || !title) &&
      (!releaseYear || releaseYear === undefined || releaseYear === null)
    ) {
      return value;
    }

    const tempValue = [...value];
    let filteredValue: MovieInfo[] = [];

    //Both Title and Release_year present
    if (title && releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return (
          val.title.toLowerCase().includes(title.toLowerCase()) &&
          val.release_date.includes(String(releaseYear))
        );
      });
      return filteredValue;
    }

    if (title) {
      filteredValue = tempValue.filter((val) => {
        return val.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    if (releaseYear) {
      filteredValue = tempValue.filter((val) => {
        return val.release_date.includes(String(releaseYear));
      });
    }
    return filteredValue;
  }
}
