import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenComponent } from './kitchen-charges.component';

describe('KitchenComponent', () => {
  let component: KitchenComponent;
  let fixture: ComponentFixture<KitchenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenComponent]
    });
    fixture = TestBed.createComponent(KitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
