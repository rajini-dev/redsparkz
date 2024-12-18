import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLocationsComponent } from './service-locations.component';

describe('ServiceLocationsComponent', () => {
  let component: ServiceLocationsComponent;
  let fixture: ComponentFixture<ServiceLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceLocationsComponent]
    });
    fixture = TestBed.createComponent(ServiceLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
