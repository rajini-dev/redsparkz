import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasstoveServiceDetailDialogComponent } from './gasstove-service-detail-dialog.component';

describe('GasstoveServiceDetailDialogComponent', () => {
  let component: GasstoveServiceDetailDialogComponent;
  let fixture: ComponentFixture<GasstoveServiceDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasstoveServiceDetailDialogComponent]
    });
    fixture = TestBed.createComponent(GasstoveServiceDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
