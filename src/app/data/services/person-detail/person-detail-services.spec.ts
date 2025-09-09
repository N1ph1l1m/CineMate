import { TestBed } from '@angular/core/testing';

import { PersonDetailServices } from './person-detail-services';

describe('PersonDetailServices', () => {
  let service: PersonDetailServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonDetailServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
