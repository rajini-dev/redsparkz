import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStoveServiceComponent } from './gas-stove-service.component';

describe('GasStoveServiceComponent', () => {
  let component: GasStoveServiceComponent;
  let fixture: ComponentFixture<GasStoveServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasStoveServiceComponent]
    });
    fixture = TestBed.createComponent(GasStoveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
