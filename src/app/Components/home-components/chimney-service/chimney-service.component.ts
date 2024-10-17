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
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ChimneyServiceComponent {
  
  chimneyServices = [
    {
      serviceType: 'Basic Chimney Cleaning',
      price: 799,
      icon: 'fa-broom',
      description: 'Basic cleaning service to remove soot and minor blockages.',
      duration: '30 minutes',
      details: [
        'Soot removal',
        'Flue cleaning',
        'Basic inspection'
      ]
    },
    {
      serviceType: 'Deep Chimney  Cleaning',
      price: 1499,
      icon: 'fa-broom',
      description: 'Comprehensive deep cleaning with thorough inspections.',
      duration: '1 hour',
      details: [
        'Soot removal',
        'Complete flue cleaning',
        'Thorough inspection',
        'Report on condition'
      ]
    },
    {
      serviceType: 'Installation/Uninstallation',
      price: 1999,
      icon: 'fa-tools',
      description: 'Expert installation or uninstallation of chimneys.',
      duration: '2-3 hours',
      details: [
        'Installation of new chimney',
        'Old chimney removal',
        'Safety inspection'
      ]
    },
    {
      serviceType: 'Chimney  Repairs',
      price: 1299,
      icon: 'fa-wrench',
      description: 'Repair services for poor suction, fire not working, and noise problems.',
      duration: '1-2 hours',
      details: [
        'Diagnosis of issues',
        'Repairs for low suction',
        'Fixing fire not working',
        'Noise reduction services'
      ]
    }
  ];

  constructor(public dialog: MatDialog) {}

  // Open dialog with unique service details
  openDialog(service: any): void {
    const dialogRef = this.dialog.open(ChimneyServiceDetailComponent, {
      width: '500px',
      data: service
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  slideConfig = {
    slidesToShow: 4, // Large screen (4 cards)
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1300, // Medium screens (up to 1300px, 3 cards)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots:false,
        }
      },
      {
        breakpoint: 1024, // Smaller tablets (up to 1024px, 2 cards)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots:false,
        }
      },
      {
        breakpoint: 600, // Mobile devices (up to 600px, 1 card)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots:false,
        }
      }
    ]
  };
  
}
