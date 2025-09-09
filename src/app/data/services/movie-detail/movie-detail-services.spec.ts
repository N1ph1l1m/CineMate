import { TestBed } from '@angular/core/testing';

import { MovieDetailServices } from './movie-detail-services';

describe('MovieDetailServices', () => {
  let service: MovieDetailServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDetailServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
