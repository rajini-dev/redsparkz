import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kitchen-service-detail-dialog',
  templateUrl: './kitchen-service-detail-dialog.component.html',
  styleUrls: ['./kitchen-service-detail-dialog.component.scss']
})
export class KitchenServiceDetailDialogComponent {
constructor(
    public dialogRef: MatDialogRef<KitchenServiceDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 
}
