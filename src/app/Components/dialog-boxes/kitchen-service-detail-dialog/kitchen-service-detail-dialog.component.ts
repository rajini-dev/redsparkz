import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-kitchen-service-detail-dialog',
  templateUrl: './kitchen-service-detail-dialog.component.html',
  styleUrls: ['./kitchen-service-detail-dialog.component.scss']
})
export class KitchenServiceDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
