import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboServicePackComponent } from './combo-service-pack.component';

describe('ComboServicePackComponent', () => {
  let component: ComboServicePackComponent;
  let fixture: ComponentFixture<ComboServicePackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboServicePackComponent]
    });
    fixture = TestBed.createComponent(ComboServicePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
