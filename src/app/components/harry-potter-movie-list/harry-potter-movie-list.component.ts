import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { MovieInfo } from '../../model/harry-potter-movie.model';
import { DollarCurrencyPipe } from '../../pipes/currency.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { HarryPotterMoviesService } from '../../services/harry-potter-movies.service';

@Component({
  selector: 'app-harry-potter-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    SearchPipe,
    DurationPipe,
    DollarCurrencyPipe,
  ],
  templateUrl: './harry-potter-movie-list.component.html',
  styleUrl: './harry-potter-movie-list.component.css'
})
export class HarryPotterMovieListComponent implements OnInit {
  movieList!: MovieInfo[];
  erroMessage!: string;
  movieTitle!: string;
  releaseYear!: number;
constructor(private harryPotterMoviesService : HarryPotterMoviesService){

}

ngOnInit(): void {
  this.getMovieList();
}

getMovieList() {
  this.harryPotterMoviesService.getMovies().subscribe(
    (data) => {
      this.movieList = data;
    }
  );
}

}
