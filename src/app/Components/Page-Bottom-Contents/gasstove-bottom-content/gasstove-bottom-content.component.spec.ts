import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasstoveBottomContentComponent } from './gasstove-bottom-content.component';

describe('GasstoveBottomContentComponent', () => {
  let component: GasstoveBottomContentComponent;
  let fixture: ComponentFixture<GasstoveBottomContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasstoveBottomContentComponent]
    });
    fixture = TestBed.createComponent(GasstoveBottomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
