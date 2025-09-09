import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPopular } from './person-popular';

describe('PersonPopular', () => {
  let component: PersonPopular;
  let fixture: ComponentFixture<PersonPopular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonPopular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonPopular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
