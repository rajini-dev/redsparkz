import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyBottomContentComponent } from './chimney-bottom-content.component';

describe('ChimneyBottomContentComponent', () => {
  let component: ChimneyBottomContentComponent;
  let fixture: ComponentFixture<ChimneyBottomContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChimneyBottomContentComponent]
    });
    fixture = TestBed.createComponent(ChimneyBottomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
