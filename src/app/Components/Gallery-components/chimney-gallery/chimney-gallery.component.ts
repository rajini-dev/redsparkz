import { Component } from '@angular/core';

@Component({
  selector: 'app-chimney-gallery',
  templateUrl: './chimney-gallery.component.html',
  styleUrls: ['./chimney-gallery.component.scss']
})
export class ChimneyGalleryComponent {
 chimneyImages = [
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
