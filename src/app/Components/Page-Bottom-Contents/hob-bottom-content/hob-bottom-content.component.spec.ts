import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobBottomContentComponent } from './hob-bottom-content.component';

describe('HobBottomContentComponent', () => {
  let component: HobBottomContentComponent;
  let fixture: ComponentFixture<HobBottomContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobBottomContentComponent]
    });
    fixture = TestBed.createComponent(HobBottomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
