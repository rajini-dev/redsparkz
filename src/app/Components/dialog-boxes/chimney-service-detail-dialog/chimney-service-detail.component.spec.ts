import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyServiceDetailComponent } from './chimney-service-detail.component';

describe('ChimneyServiceDetailComponent', () => {
  let component: ChimneyServiceDetailComponent;
  let fixture: ComponentFixture<ChimneyServiceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChimneyServiceDetailComponent]
    });
    fixture = TestBed.createComponent(ChimneyServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
