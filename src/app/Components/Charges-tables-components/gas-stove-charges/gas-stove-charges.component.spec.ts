import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStoveChargesComponent } from './gas-stove-charges.component';

describe('GasStoveChargesComponent', () => {
  let component: GasStoveChargesComponent;
  let fixture: ComponentFixture<GasStoveChargesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasStoveChargesComponent]
    });
    fixture = TestBed.createComponent(GasStoveChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
