import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationCardComponent } from '@shared/components';

describe('AccomodationCardComponent', () => {
  let component: AccommodationCardComponent;
  let fixture: ComponentFixture<AccommodationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccommodationCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccommodationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
