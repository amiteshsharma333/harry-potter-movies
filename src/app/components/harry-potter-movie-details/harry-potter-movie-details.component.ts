import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../../model/harry-potter-movie.model';
import { DollarCurrencyPipe } from '../../pipes/currency.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { HarryPotterMoviesService } from '../../services/harry-potter-movies.service';

@Component({
  selector: 'app-harry-potter-movie-details',
  standalone: true,
  imports: [  
    DurationPipe,
    DollarCurrencyPipe,
  ],
  templateUrl: './harry-potter-movie-details.component.html',
  styleUrl: './harry-potter-movie-details.component.css'
})
export class HarryPotterMovieDetailsComponent {
  movie_id: string = '';
  movie:MovieDetails={
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  } ;
  erroMessage: string='';

  constructor(
    private harryPotterMoviesService: HarryPotterMoviesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.route.params.subscribe((movie_id) => {
      this.movie_id = movie_id['movieId'];
    });

    this.harryPotterMoviesService.getMovieById(this.movie_id).subscribe((movie) => {
      this.movie=movie;
    }
  );
  }

  backToHome():void{
    this.router.navigate(['/movies']);
  }
}
