import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobGalleryComponent } from './hob-gallery.component';

describe('HobGalleryComponent', () => {
  let component: HobGalleryComponent;
  let fixture: ComponentFixture<HobGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobGalleryComponent]
    });
    fixture = TestBed.createComponent(HobGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
