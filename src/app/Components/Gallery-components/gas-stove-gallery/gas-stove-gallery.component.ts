import { Component } from '@angular/core';

@Component({
  selector: 'app-gas-stove-gallery',
  templateUrl: './gas-stove-gallery.component.html',
  styleUrls: ['./gas-stove-gallery.component.scss']
})
export class GasStoveGalleryComponent {
  gasStoveImages = [
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
