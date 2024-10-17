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
      serviceImage: 'assets/Home-images/chimney-cleanig.webp',
      servicePrice:'150',
      pageLink:'services/chimney',
    },
    {
      service: 'Gas Stove services',
      serviceImage: 'assets/Home-images/chimney-cleanig.webp',
      servicePrice:'150',
      pageLink:'services/gas-stove',
    },
    {
      service: 'Hob services',
      serviceImage: 'assets/Home-images/chimney-cleanig.webp',
      servicePrice:'150',
      pageLink:'services/hob',
    },
    
    {
      service: 'Kitchen Cleaning',
      serviceImage: 'assets/Home-images/chimney-cleanig.webp',
      servicePrice:'999',
      pageLink:'services/kitchen-cleaning',
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
