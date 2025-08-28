import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsNowPlaying } from './serials-now-playing';

describe('SerialsNowPlaying', () => {
  let component: SerialsNowPlaying;
  let fixture: ComponentFixture<SerialsNowPlaying>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialsNowPlaying]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialsNowPlaying);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
