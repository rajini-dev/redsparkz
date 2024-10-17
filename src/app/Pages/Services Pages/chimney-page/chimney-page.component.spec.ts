import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyPageComponent } from './chimney-page.component';

describe('ChimneyPageComponent', () => {
  let component: ChimneyPageComponent;
  let fixture: ComponentFixture<ChimneyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChimneyPageComponent]
    });
    fixture = TestBed.createComponent(ChimneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
