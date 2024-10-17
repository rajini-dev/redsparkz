import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenServiceComponent } from './kitchen-service.component';

describe('KitchenServiceComponent', () => {
  let component: KitchenServiceComponent;
  let fixture: ComponentFixture<KitchenServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenServiceComponent]
    });
    fixture = TestBed.createComponent(KitchenServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
