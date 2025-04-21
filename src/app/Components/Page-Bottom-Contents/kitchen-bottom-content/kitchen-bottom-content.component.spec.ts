import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenBottomContentComponent } from './kitchen-bottom-content.component';

describe('KitchenBottomContentComponent', () => {
  let component: KitchenBottomContentComponent;
  let fixture: ComponentFixture<KitchenBottomContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenBottomContentComponent]
    });
    fixture = TestBed.createComponent(KitchenBottomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
