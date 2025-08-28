import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upcomming } from './upcomming';

describe('Upcomming', () => {
  let component: Upcomming;
  let fixture: ComponentFixture<Upcomming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upcomming]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Upcomming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
