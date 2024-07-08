import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterMovieListComponent } from './harry-potter-movie-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('HarryPotterMovieListComponent', () => {
  let component: HarryPotterMovieListComponent;
  let fixture: ComponentFixture<HarryPotterMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPotterMovieListComponent,HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarryPotterMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
