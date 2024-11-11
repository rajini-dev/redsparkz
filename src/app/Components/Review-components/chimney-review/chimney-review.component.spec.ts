import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyReviewComponent } from './chimney-review.component';

describe('ChimneyReviewComponent', () => {
  let component: ChimneyReviewComponent;
  let fixture: ComponentFixture<ChimneyReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChimneyReviewComponent]
    });
    fixture = TestBed.createComponent(ChimneyReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
