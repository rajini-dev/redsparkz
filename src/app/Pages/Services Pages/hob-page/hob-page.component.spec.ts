import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobPageComponent } from './hob-page.component';

describe('HobPageComponent', () => {
  let component: HobPageComponent;
  let fixture: ComponentFixture<HobPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobPageComponent]
    });
    fixture = TestBed.createComponent(HobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
