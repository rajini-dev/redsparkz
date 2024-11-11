import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gasstove-service-detail-dialog',
  templateUrl: './gasstove-service-detail-dialog.component.html',
  styleUrls: ['./gasstove-service-detail-dialog.component.scss']
})
export class GasstoveServiceDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GasstoveServiceDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 

}
