import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KitchenServiceDetailDialogComponent } from '../../dialog-boxes/kitchen-service-detail-dialog/kitchen-service-detail-dialog.component';

@Component({
  selector: 'app-kitchen-service',
  templateUrl: './kitchen-service.component.html',
  styleUrls: ['./kitchen-service.component.scss']
})
export class KitchenServiceComponent {
 // Data for Kitchen Services
 kitchenServices = [
  { name: 'Empty Kitchen', price: 999, details: 'Complete kitchen cleaning without chimney and appliances.' },
  { name: 'With Chimney', price: 1499, details: 'Kitchen cleaning including chimney.' },
  { name: 'With Appliances', price: 1499, details: 'Kitchen cleaning with appliances included.' },
  { name: 'With Appliances & Chimney', price: 1999, details: 'Comprehensive cleaning with both appliances and chimney.' },
  { name: 'Full Kitchen Cleaning (Deep)', price: 2499, details: 'Deep cleaning of the entire kitchen including appliances, chimney, and hard-to-reach areas.' }
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

// Function to open the dialog with details for each kitchen service
openDialog(service: any): void {
  this.dialog.open(KitchenServiceDetailDialogComponent, {
    data: service  // Passing the service data to the dialog
  });
}
}
