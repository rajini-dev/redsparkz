import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hob-service-detail-dialog',
  templateUrl: './hob-service-detail-dialog.component.html',
  styleUrls: ['./hob-service-detail-dialog.component.scss']
})
export class HobServiceDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
