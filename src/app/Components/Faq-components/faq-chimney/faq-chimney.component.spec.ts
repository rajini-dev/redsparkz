import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqChimneyComponent } from './faq-chimney.component';

describe('FaqChimneyComponent', () => {
  let component: FaqChimneyComponent;
  let fixture: ComponentFixture<FaqChimneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqChimneyComponent]
    });
    fixture = TestBed.createComponent(FaqChimneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
