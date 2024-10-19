import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyGalleryComponent } from './chimney-gallery.component';

describe('ChimneyGalleryComponent', () => {
  let component: ChimneyGalleryComponent;
  let fixture: ComponentFixture<ChimneyGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChimneyGalleryComponent]
    });
    fixture = TestBed.createComponent(ChimneyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
