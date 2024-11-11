import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chimney-service-detail',
  templateUrl: './chimney-service-detail-dialog.component.html',
  styleUrls: ['./chimney-service-detail.component.scss'],
})
export class ChimneyServiceDetailComponent {
  
  slickConfig = {
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    dots: true, // Show navigation dots
    arrows: true, // Show previous/next arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between 
  };

  constructor(
    public dialogRef: MatDialogRef<ChimneyServiceDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 

}
