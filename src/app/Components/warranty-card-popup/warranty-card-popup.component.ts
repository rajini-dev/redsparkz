import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warranty-card-popup',
  templateUrl: './warranty-card-popup.component.html',
  styleUrls: ['./warranty-card-popup.component.scss']
})
export class WarrantyCardPopupComponent {
  constructor(private dialogRef: MatDialogRef<WarrantyCardPopupComponent>) {}

  close(): void {
    this.dialogRef.close(); // Closes the dialog
  }
}
