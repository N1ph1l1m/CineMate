import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePopular } from './people-popular';

describe('PeoplePopular', () => {
  let component: PeoplePopular;
  let fixture: ComponentFixture<PeoplePopular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeoplePopular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeoplePopular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
