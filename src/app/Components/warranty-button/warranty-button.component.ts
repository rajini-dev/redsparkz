import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WarrantyCardPopupComponent } from '../warranty-card-popup/warranty-card-popup.component';

@Component({
  selector: 'app-warranty-button',
  templateUrl: './warranty-button.component.html',
  styleUrls: ['./warranty-button.component.scss']
})
export class WarrantyButtonComponent {
  constructor(public dialog: MatDialog) {}

  openWarrantyCard(): void {
    this.dialog.open(WarrantyCardPopupComponent, {
      width: '800px' // Adjust the width here (e.g., '600px', '80%', etc.)
    });
  }
}
