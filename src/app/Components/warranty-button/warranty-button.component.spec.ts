import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyButtonComponent } from './warranty-button.component';

describe('WarrantyButtonComponent', () => {
  let component: WarrantyButtonComponent;
  let fixture: ComponentFixture<WarrantyButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarrantyButtonComponent]
    });
    fixture = TestBed.createComponent(WarrantyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
