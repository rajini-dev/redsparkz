import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTopServicesComponent } from './our-top-services.component';

describe('OurTopServicesComponent', () => {
  let component: OurTopServicesComponent;
  let fixture: ComponentFixture<OurTopServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTopServicesComponent]
    });
    fixture = TestBed.createComponent(OurTopServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
