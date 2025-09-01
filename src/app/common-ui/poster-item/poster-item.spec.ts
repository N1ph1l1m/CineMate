import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterItem } from './poster-item';

describe('PosterItem', () => {
  let component: PosterItem;
  let fixture: ComponentFixture<PosterItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
