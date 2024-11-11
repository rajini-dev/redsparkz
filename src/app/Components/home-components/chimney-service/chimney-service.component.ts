import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WarrantyCardPopupComponent } from '../../warranty-card-popup/warranty-card-popup.component';
import { ChimneyServiceDetailComponent } from '../../dialog-boxes/chimney-service-detail-dialog/chimney-service-detail.component';
@Component({
  selector: 'app-chimney-service',
  templateUrl: './chimney-service.component.html',
  styleUrls: ['./chimney-service.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ChimneyServiceComponent {
  chimneyServices = [
    {
      serviceImage: [
        'assets/ home-services-images/chimney basic cleaning.png',
        'assets/ home-services-images/chimney basic cleaning.png',
        'assets/ home-services-images/chimney basic cleaning.png',
      ],
      serviceType: 'Basic Chimney Cleaning',
      price: 449,
      icon: 'fa-broom',
      description: 'Basic cleaning service to remove soot and minor blockages',
      duration: '45 minutes',
      details: [
        'Removal of grease and other stains for cleaner look.',
        'Basic filter cleaning helps in better suction. ',
        'Industry grade chemicals used for better working in the long term.',
      ],
    },
    {
      serviceImage: ['assets/ home-services-images/chimney deep cleaning.png'],
      serviceType: 'Deep Chimney Cleaning',
      price: 999,
      icon: 'fa-broom',
      description: 'Comprehensive deep cleaning with thorough inspections.',
      duration: '1 hr 15 minutes',
      details: [
        'Removal of grease and other stains for cleaner look.',
        'Filter cleaning helps in better suction.',
        'Duct cleaning helps in better release of stale air for improved functioning.',
        'Industry grade chemicals used for better working in the long term.',
      ],
    },
    {
      serviceImage: ['assets/ home-services-images/chimney installation.png'],
      serviceType: 'Installation',
      price: 499,
      icon: 'fa-tools',
      description: 'Expert installation of chimneys.',
      duration: '45 minutes',
      details: ['Installation of New / Old chimney', 'Safety inspection'],
    },
    {
      serviceImage: ['assets/ home-services-images/chimney dismantal.png'],
      serviceType: 'Dismantle',
      price: 449,
      icon: 'fa-tools',
      description: 'Expert Dismantle of chimneys.',
      duration: '45 minutes',
      details: ['New / Old  chimney removal', 'Safety inspection'],
    },
    {
      serviceImage: ['assets/ home-services-images/chimney repair.png'],
      serviceType: 'Chimney  Repairs',
      price: 149,
      icon: 'fa-wrench',
      description:
        'Repair services for poor suction, fire not working, and noise problems.',
      duration: 'Minimum 45 minutes',
      details: [
        'If you are availing the service, no inspection charge, only pay the service charge. Incase not availing the service you have to pay the inspection charge ₹ 149',
      ],
    },
  ];

  constructor(public dialog: MatDialog) {}

  // Open dialog with unique service details
  openDialog(service: any): void {
    const dialogRef = this.dialog.open(ChimneyServiceDetailComponent, {
      width: '500px',
      height: '600px',
      maxWidth: '90vw',
      maxHeight: '80vh',
      data: service,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  // slideConfig = {
  //   slidesToShow: 4, // Large screen (4 cards)
  //   slidesToScroll: 1,
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1300, // Medium screens (up to 1300px, 3 cards)
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots:false,
  //       }
  //     },
  //     {
  //       breakpoint: 1024, // Smaller tablets (up to 1024px, 2 cards)
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots:false,
  //       }
  //     },
  //     {
  //       breakpoint: 600, // Mobile devices (up to 600px, 1 card)
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots:false,
  //       }
  //     }
  //   ]
  // };
}
