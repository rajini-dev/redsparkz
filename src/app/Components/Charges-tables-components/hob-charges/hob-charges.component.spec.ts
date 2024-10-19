import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobChargesComponent } from './hob-charges.component';

describe('HobChargesComponent', () => {
  let component: HobChargesComponent;
  let fixture: ComponentFixture<HobChargesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobChargesComponent]
    });
    fixture = TestBed.createComponent(HobChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
