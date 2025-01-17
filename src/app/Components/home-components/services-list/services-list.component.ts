import { Component } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent {
  services = [
    {
      service: 'Chimney services',
      serviceImage: 'assets/ home-services-images/chimney basic cleaning.png',
      servicePrice:'150',
      pageLink:'chimney-service-chennai',
    },
    {
      service: 'Gas Stove services',
      serviceImage: 'assets/ home-services-images/gas stove repair.png',
      servicePrice:'150',
      pageLink:'gas-stove-service-chennai',
    },
    {
      service: 'Hob services',
      serviceImage: 'assets/ home-services-images/hob service.png',
      servicePrice:'150',
      pageLink:'hob-service-chennai',
    },
    
    {
      service: 'Kitchen Cleaning',
      serviceImage: 'assets/ home-services-images/kitchen deep service.png',
      servicePrice:'999',
      pageLink:'kitchen-cleaning-service-chennai',
    },
   
  ];

  banners = [
    { banner: 'assets/Banners/1.png', altText: 'First slide' },
    { banner: 'assets/Banners/2.png', altText: 'First slide' },
    { banner: 'assets/Banners/Blog.png', altText: 'Second slide' },
    { banner: 'assets/Banners/products.jpeg', altText: 'Third slide' },
    
  ];
 
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    infinite: true,
  };
}
