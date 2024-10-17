import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyServiceComponent } from './chimney-service.component';

describe('ChimneyServiceComponent', () => {
  let component: ChimneyServiceComponent;
  let fixture: ComponentFixture<ChimneyServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChimneyServiceComponent]
    });
    fixture = TestBed.createComponent(ChimneyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
