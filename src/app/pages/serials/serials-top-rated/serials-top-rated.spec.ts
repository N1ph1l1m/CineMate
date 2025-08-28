import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsTopRated } from './serials-top-rated';

describe('SerialsTopRated', () => {
  let component: SerialsTopRated;
  let fixture: ComponentFixture<SerialsTopRated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialsTopRated]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialsTopRated);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
