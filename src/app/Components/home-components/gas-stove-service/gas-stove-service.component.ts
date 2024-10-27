import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GasstoveServiceDetailDialogComponent } from '../../dialog-boxes/gasstove-service-detail-dialog/gasstove-service-detail-dialog.component';

@Component({
  selector: 'app-gas-stove-service',
  templateUrl: './gas-stove-service.component.html',
  styleUrls: ['./gas-stove-service.component.scss'],
})
export class GasStoveServiceComponent {

  gasStoveServices = [
    { 
      serviceImage:'assets/ home-services-images/gas stove repair.png',
      serviceType: 'Gas stove repair',
      price: 249,
      description: 'Gas Leakage, Low Flame, Physical Damage, Knob Issues, High Flame',
      duration: 'Minimum 45 minutes',
    },
    {
      serviceImage:'assets/ home-services-images/gas stove steam cleaning.png',
      serviceType: 'Full Deep Steam Cleaning & Repair ',
      price: 349,
      description: "Complete service combining deep steam cleaning and essential repairs, ensuring your gas stove is spotless and functioning at its best.",
      duration: 'Minimum 45 minutes',
      priceDetails: [
        { price: '2 Burner - ₹349' },
        { price: '3 Burner - ₹449' },
        { price: '4 Burner - ₹549' },
      ]
    }
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
          dots:false,
          arrows: false, 
        }
      },
      {
        breakpoint: 1024, // Smaller tablets (up to 1024px, 2 cards)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots:false,
          arrows: false, 
        }
      },
      {
        breakpoint: 600, // Mobile devices (up to 600px, 1 card)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots:false,
          arrows: true, 
        }
      }
    ]
  };
  constructor(public dialog: MatDialog) {}

  // Function to open the dialog with details for each gas stove service
  openDialog(service: any): void {
    this.dialog.open(GasstoveServiceDetailDialogComponent, {
      width: '500px',
      data: service  // Passing the service data to the dialog
    });
  }
}
