import { TestBed } from '@angular/core/testing';

import { GiphyServicesService } from './giphy-services.service';

describe('GiphyServicesService', () => {
  let service: GiphyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
