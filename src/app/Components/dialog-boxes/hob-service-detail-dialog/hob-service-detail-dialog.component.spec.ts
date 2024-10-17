import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobServiceDetailDialogComponent } from './hob-service-detail-dialog.component';

describe('HobServiceDetailDialogComponent', () => {
  let component: HobServiceDetailDialogComponent;
  let fixture: ComponentFixture<HobServiceDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobServiceDetailDialogComponent]
    });
    fixture = TestBed.createComponent(HobServiceDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
