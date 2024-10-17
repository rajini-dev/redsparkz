import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobServiceComponent } from './hob-service.component';

describe('HobServiceComponent', () => {
  let component: HobServiceComponent;
  let fixture: ComponentFixture<HobServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobServiceComponent]
    });
    fixture = TestBed.createComponent(HobServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
