import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HarryPotterMovieDetailsComponent } from './harry-potter-movie-details.component';
import { RouterTestingModule } from "@angular/router/testing";
describe('HarryPotterMovieDetailsComponent', () => {
  let component: HarryPotterMovieDetailsComponent;
  let fixture: ComponentFixture<HarryPotterMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPotterMovieDetailsComponent, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarryPotterMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
