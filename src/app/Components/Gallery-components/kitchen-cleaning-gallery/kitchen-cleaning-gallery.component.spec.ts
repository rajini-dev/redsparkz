import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenCleaningGalleryComponent } from './kitchen-cleaning-gallery.component';

describe('KitchenCleaningGalleryComponent', () => {
  let component: KitchenCleaningGalleryComponent;
  let fixture: ComponentFixture<KitchenCleaningGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenCleaningGalleryComponent]
    });
    fixture = TestBed.createComponent(KitchenCleaningGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
