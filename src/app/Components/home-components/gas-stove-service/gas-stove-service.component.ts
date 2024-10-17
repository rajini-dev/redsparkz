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
    { burnerType: '2 Burner', price: 399, details: 'Gas Leakage, Low Flame, Physical Damage, Knob Issues' },
    { burnerType: '3 Burner', price: 499, details: 'Gas Leakage, Low Flame, Physical Damage, Knob Issues' },
    { burnerType: '4 Burner', price: 599, details: 'Gas Leakage, Low Flame, Physical Damage, Knob Issues' },
    { burnerType: '5 Burner', price: 699, details: 'Gas Leakage, Low Flame, Physical Damage, Knob Issues' }
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
  constructor(public dialog: MatDialog) {}

  // Function to open the dialog with details for each gas stove service
  openDialog(service: any): void {
    this.dialog.open(GasstoveServiceDetailDialogComponent, {
      data: service  // Passing the service data to the dialog
    });
  }
}
