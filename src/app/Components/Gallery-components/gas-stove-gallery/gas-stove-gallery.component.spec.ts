import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStoveGalleryComponent } from './gas-stove-gallery.component';

describe('GasStoveGalleryComponent', () => {
  let component: GasStoveGalleryComponent;
  let fixture: ComponentFixture<GasStoveGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasStoveGalleryComponent]
    });
    fixture = TestBed.createComponent(GasStoveGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
