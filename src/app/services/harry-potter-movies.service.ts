import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails, MovieInfo } from '../model/harry-potter-movie.model';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterMoviesService {
  private apiUrl = '/movies';
  constructor(private httpClient: HttpClient) { }
  getMovies(): Observable<MovieInfo[]> {
    return this.httpClient.get<MovieInfo[]>(this.apiUrl);
  }

  getMovieById(movieId: string): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>(this.apiUrl +"/"+ movieId);  
  }

}
