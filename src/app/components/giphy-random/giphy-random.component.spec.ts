import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyRandomComponent } from './giphy-random.component';

describe('GiphyRandomComponent', () => {
  let component: GiphyRandomComponent;
  let fixture: ComponentFixture<GiphyRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
