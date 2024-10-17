import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStovePageComponent } from './gas-stove-page.component';

describe('GasStovePageComponent', () => {
  let component: GasStovePageComponent;
  let fixture: ComponentFixture<GasStovePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasStovePageComponent]
    });
    fixture = TestBed.createComponent(GasStovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
