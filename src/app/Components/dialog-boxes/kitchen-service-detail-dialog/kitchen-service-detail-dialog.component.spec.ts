import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenServiceDetailDialogComponent } from './kitchen-service-detail-dialog.component';

describe('KitchenServiceDetailDialogComponent', () => {
  let component: KitchenServiceDetailDialogComponent;
  let fixture: ComponentFixture<KitchenServiceDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenServiceDetailDialogComponent]
    });
    fixture = TestBed.createComponent(KitchenServiceDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
