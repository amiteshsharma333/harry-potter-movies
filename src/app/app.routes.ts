import { Routes } from '@angular/router';
import { HarryPotterMovieDetailsComponent } from './components/harry-potter-movie-details/harry-potter-movie-details.component';
import { HarryPotterMovieListComponent } from './components/harry-potter-movie-list/harry-potter-movie-list.component';

export const routes: Routes = [
    { path: 'movies', component: HarryPotterMovieListComponent },
    { path: 'movies/:movieId', component: HarryPotterMovieDetailsComponent },
    { path: '**', redirectTo: 'movies' },
];
