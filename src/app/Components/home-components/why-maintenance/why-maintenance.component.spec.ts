import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMaintenanceComponent } from './why-maintenance.component';

describe('WhyMaintenanceComponent', () => {
  let component: WhyMaintenanceComponent;
  let fixture: ComponentFixture<WhyMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyMaintenanceComponent]
    });
    fixture = TestBed.createComponent(WhyMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
