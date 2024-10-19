import { Component } from '@angular/core';

@Component({
  selector: 'app-hob-gallery',
  templateUrl: './hob-gallery.component.html',
  styleUrls: ['./hob-gallery.component.scss']
})
export class HobGalleryComponent {
  hobImages = [
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
