import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HobServiceDetailDialogComponent } from '../../dialog-boxes/hob-service-detail-dialog/hob-service-detail-dialog.component';

@Component({
  selector: 'app-hob-service',
  templateUrl: './hob-service.component.html',
  styleUrls: ['./hob-service.component.scss']
})
export class HobServiceComponent {
  hobServices = [
    { burnerType: '2 Burner', price: 499, details: 'Parking Pin Not Working, Low Flame, Physical Damage, Knob Issued' },
    { burnerType: '3 Burner', price: 599, details: 'Parking Pin Not Working, Low Flame, Physical Damage, Knob Issued' },
    { burnerType: '4 Burner', price: 699, details: 'Parking Pin Not Working, Low Flame, Physical Damage, Knob Issued' },
    { burnerType: '5 Burner', price: 699, details: 'Parking Pin Not Working, Low Flame, Physical Damage, Knob Issued' }
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

  // Function to open the dialog with details for each hob service
  openDialog(service: any): void {
    this.dialog.open(HobServiceDetailDialogComponent, {
      data: service  // Passing the service data to the dialog
    });
  }
}
