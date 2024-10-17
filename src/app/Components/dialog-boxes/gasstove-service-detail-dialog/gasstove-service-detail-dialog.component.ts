import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gasstove-service-detail-dialog',
  templateUrl: './gasstove-service-detail-dialog.component.html',
  styleUrls: ['./gasstove-service-detail-dialog.component.scss']
})
export class GasstoveServiceDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
