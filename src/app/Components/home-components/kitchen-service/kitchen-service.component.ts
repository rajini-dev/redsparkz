import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KitchenServiceDetailDialogComponent } from '../../dialog-boxes/kitchen-service-detail-dialog/kitchen-service-detail-dialog.component';

@Component({
  selector: 'app-kitchen-service',
  templateUrl: './kitchen-service.component.html',
  styleUrls: ['./kitchen-service.component.scss'],
})
export class KitchenServiceComponent {
  // Data for Kitchen Services
 kitchenServices = [
  {
    serviceImage:'assets/ home-services-images/kitchen basic service.png',
    serviceType: 'Kitchen Cleaning with Chimney & Gas Stove (No Appliances)',
    price: '1,249',
    description:
      'Get a spotless kitchen with our Kitchen, Chimney, and Gas Stove Cleaning Combo (excluding appliances) for just ₹1,999. Our team ensures a deep clean of essential surfaces to leave your kitchen fresh and grease-free.',
    details: [
      { 
        heading: 'Tile Cleaning', 
        details: 'Removes stains, grease, and dirt for spotless surfaces.' 
      },
      { 
        heading: 'Sink Cleaning', 
        details: 'Sanitizes the sink, leaving it fresh and germ-free.' 
      },
      { 
        heading: 'Grease Removal', 
        details: 'Removes tough grease from kitchen surfaces.' 
      },
      { 
        heading: 'Surface Polishing', 
        details: 'Polishes all surfaces for a fresh, clean look.' 
      },
      { 
        heading: 'Chimney Grease & Soot Removal', 
        details: 'Deep cleans chimney surfaces for improved efficiency.' 
      },
      { 
        heading: 'Gas Stove Surface Cleaning', 
        details: 'Cleans the gas stove exterior, removing grease and stains.' 
      },
    ],
    duration: 'Minimum 60 minutes',
  },
  {
    serviceImage:'assets/ home-services-images/kitchen deep service.png',
    serviceType: 'Kitchen Cleaning with Chimney & Gas Stove (With Appliances)',
    price: '2,199',
    description:
      'Enjoy a comprehensive Kitchen, Chimney, and Gas Stove Cleaning Combo (including appliances) for just ₹2,499. This full-service clean tackles all surfaces and appliances to ensure a pristine kitchen environment.',
    details: [
      { 
        heading: 'Tile Cleaning', 
        details: 'Removes stains, grease, and dirt for spotless surfaces.' 
      },
      { 
        heading: 'Sink Cleaning', 
        details: 'Sanitizes the sink, leaving it fresh and germ-free.' 
      },
      { 
        heading: 'Grease Removal', 
        details: 'Removes tough grease from kitchen surfaces.' 
      },
      { 
        heading: 'Surface Polishing', 
        details: 'Polishes all surfaces for a fresh, clean look.' 
      },
      { 
        heading: 'Chimney Grease & Soot Removal', 
        details: 'Deep cleans chimney surfaces for improved efficiency.' 
      },
      { 
        heading: 'Gas Stove Deep Cleaning', 
        details: 'Thoroughly cleans gas stove burners and surfaces.' 
      },
      { 
        heading: 'Appliance Cleaning', 
        details: 'Includes detailed cleaning of kitchen appliances like microwave and oven.' 
      },
    ],
    duration: 'Minimum 90 minutes',
  },
];


  slideConfig = {
    slidesToShow: 4, // Large screen (4 cards)
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300, // Medium screens (up to 1300px, 3 cards)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024, // Smaller tablets (up to 1024px, 2 cards)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600, // Mobile devices (up to 600px, 1 card)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  constructor(public dialog: MatDialog) {}

  // Function to open the dialog with details for each kitchen service
  openDialog(service: any): void {
    this.dialog.open(KitchenServiceDetailDialogComponent, {
      width: '500px',
      data: service, // Passing the service data to the dialog
    });
  }
}
