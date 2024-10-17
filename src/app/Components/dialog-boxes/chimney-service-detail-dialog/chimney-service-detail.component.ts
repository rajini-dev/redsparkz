import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chimney-service-detail',
  templateUrl: './chimney-service-detail-dialog.component.html',
  styleUrls: ['./chimney-service-detail.component.scss']
})
export class ChimneyServiceDetailComponent {

  constructor(
    public dialogRef: MatDialogRef<ChimneyServiceDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
