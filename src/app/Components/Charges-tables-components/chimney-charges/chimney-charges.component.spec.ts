import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyChargesComponent } from './chimney-charges.component';

describe('ChimneyChargesComponent', () => {
  let component: ChimneyChargesComponent;
  let fixture: ComponentFixture<ChimneyChargesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChimneyChargesComponent]
    });
    fixture = TestBed.createComponent(ChimneyChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
