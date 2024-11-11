import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWhyChooseUsComponent } from './mini-why-choose-us.component';

describe('MiniWhyChooseUsComponent', () => {
  let component: MiniWhyChooseUsComponent;
  let fixture: ComponentFixture<MiniWhyChooseUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniWhyChooseUsComponent]
    });
    fixture = TestBed.createComponent(MiniWhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
