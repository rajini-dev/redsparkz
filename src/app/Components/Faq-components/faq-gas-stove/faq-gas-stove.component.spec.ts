import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqGasStoveComponent } from './faq-gas-stove.component';

describe('FaqGasStoveComponent', () => {
  let component: FaqGasStoveComponent;
  let fixture: ComponentFixture<FaqGasStoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqGasStoveComponent]
    });
    fixture = TestBed.createComponent(FaqGasStoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
