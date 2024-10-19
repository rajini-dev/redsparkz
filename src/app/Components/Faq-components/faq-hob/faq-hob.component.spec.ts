import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqHobComponent } from './faq-hob.component';

describe('FaqHobComponent', () => {
  let component: FaqHobComponent;
  let fixture: ComponentFixture<FaqHobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqHobComponent]
    });
    fixture = TestBed.createComponent(FaqHobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
