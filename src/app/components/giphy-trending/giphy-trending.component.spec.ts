import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyTrendingComponent } from './giphy-trending.component';

describe('GiphyTrendingComponent', () => {
  let component: GiphyTrendingComponent;
  let fixture: ComponentFixture<GiphyTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
