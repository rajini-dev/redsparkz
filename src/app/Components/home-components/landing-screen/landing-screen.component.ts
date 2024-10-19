import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent {
  points = [
    {text: 'No Huge Upfront Fees'},
    {text: 'Guaranteed On-Time Service'},
    {text: 'Dedicated Customer Support'},
    {text: '100% Satisfaction Guarantee'},
  ];

  banners = [
    { image: 'assets/Banners/banner-1.png',  alt: 'Banner 1' },
    { image: 'assets/Banners/banner-1.png', alt: 'Banner 2' },
    { image: 'assets/Banners/banner-1.png',  alt: 'Banner 3' },
    { image: 'assets/Banners/banner-1.png',  alt: 'Banner 4' },
    { image: 'assets/Banners/banner-1.png', alt: 'Banner 4' }
  ];
}
