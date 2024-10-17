import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyCardPopupComponent } from './warranty-card-popup.component';

describe('WarrantyCardPopupComponent', () => {
  let component: WarrantyCardPopupComponent;
  let fixture: ComponentFixture<WarrantyCardPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarrantyCardPopupComponent]
    });
    fixture = TestBed.createComponent(WarrantyCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
