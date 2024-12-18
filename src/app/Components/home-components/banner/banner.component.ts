import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('imageFadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
    // Content Fade-In Animation (appears after a slight delay)
    trigger('contentFadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 1s', style({ opacity: 1 })), // 1s delay after image is shown
      ]),
    ]),
  ],
})
export class BannerComponent {
  slides = [
    { src: 'assets/Banners/1.png', alt: '' },
    { src: 'assets/Banners/2.png', alt: '' },
    { src: 'assets/Banners/3.png', alt: '' },
    { src: 'assets/Banners/4.png', alt: '' },
    { src: 'assets/Banners/5.png', alt: '' },
    { src: 'assets/Banners/6.png', alt: '' },
    { src: 'assets/Banners/7.png', alt: '' },
    { src: 'assets/Banners/8.png', alt: '' },
  ];

  currentSlideIndex = 0;
  autoSlideInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startAutoSlide(); // Start auto-sliding when the component is initialized
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval); // Clean up interval when component is destroyed
    }
  }

  // Function to start the auto-slide
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide(); // Change to the next slide every 3 seconds
    }, 5000); // 3000 milliseconds = 3 seconds
  }

  // Function to go to the previous slide
  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.resetAutoSlide(); // Reset auto-slide timer
  }

  // Function to go to the next slide
  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
    this.resetAutoSlide(); // Reset auto-slide timer
  }

  // Function to reset the auto-slide timer when user manually changes the slide
  resetAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval); // Stop previous interval
    }
    this.startAutoSlide(); // Start a new interval
  }
}
