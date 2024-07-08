import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HarryPotterMoviesService } from './harry-potter-movies.service';

describe('HarryPotterMoviesService', () => {
  let service: HarryPotterMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(HarryPotterMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
