import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsPopular } from './serials-popular';

describe('SerialsPopular', () => {
  let component: SerialsPopular;
  let fixture: ComponentFixture<SerialsPopular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialsPopular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialsPopular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
