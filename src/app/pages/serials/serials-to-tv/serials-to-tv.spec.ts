import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsToTv } from './serials-to-tv';

describe('SerialsToTv', () => {
  let component: SerialsToTv;
  let fixture: ComponentFixture<SerialsToTv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialsToTv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialsToTv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
