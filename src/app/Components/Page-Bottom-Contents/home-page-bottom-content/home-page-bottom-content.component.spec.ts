import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBottomContentComponent } from './home-page-bottom-content.component';

describe('HomePageBottomContentComponent', () => {
  let component: HomePageBottomContentComponent;
  let fixture: ComponentFixture<HomePageBottomContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageBottomContentComponent]
    });
    fixture = TestBed.createComponent(HomePageBottomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
