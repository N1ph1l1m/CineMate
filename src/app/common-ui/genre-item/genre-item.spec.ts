import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreItem } from './genre-item';

describe('GenreItem', () => {
  let component: GenreItem;
  let fixture: ComponentFixture<GenreItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
