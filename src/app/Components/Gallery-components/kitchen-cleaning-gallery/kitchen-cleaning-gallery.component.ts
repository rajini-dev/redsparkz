import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-cleaning-gallery',
  templateUrl: './kitchen-cleaning-gallery.component.html',
  styleUrls: ['./kitchen-cleaning-gallery.component.scss']
})
export class KitchenCleaningGalleryComponent {
  kitchenImages = [
    {
      src: 'assets/Before-After-Images/kitchen-cleaning-images/Presents.png',
      alt: 'Kitchen Cleaning 1'
    },
    {
      src: 'assets/Before-After-Images/kitchen-cleaning-images/Presents.png',
      alt: 'Kitchen Cleaning 2'
    },
    {
      src: 'assets/Before-After-Images/kitchen-cleaning-images/Presents.png',
      alt: 'Kitchen Cleaning 3'
    },
    {
      src: 'assets/Before-After-Images/kitchen-cleaning-images/Presents.png',
      alt: 'Kitchen Cleaning 3'
    },
    {
      src: 'assets/Before-After-Images/kitchen-cleaning-images/Presents.png',
      alt: 'Kitchen Cleaning 3'
    },
    {
      src: 'assets/Before-After-Images/kitchen-cleaning-images/Presents.png',
      alt: 'Kitchen Cleaning 3'
    }
    // Add more images as needed
  ];


}
