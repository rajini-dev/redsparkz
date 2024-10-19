import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqKitchenComponent } from './faq-kitchen.component';

describe('FaqKitchenComponent', () => {
  let component: FaqKitchenComponent;
  let fixture: ComponentFixture<FaqKitchenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqKitchenComponent]
    });
    fixture = TestBed.createComponent(FaqKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
