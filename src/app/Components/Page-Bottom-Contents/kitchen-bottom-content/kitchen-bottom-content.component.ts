import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kitchen-bottom-content',
  templateUrl: './kitchen-bottom-content.component.html',
  styleUrls: ['./kitchen-bottom-content.component.scss']
})
export class KitchenBottomContentComponent {
  isExpanded = false;

  @ViewChild('expandContent') expandContent!: ElementRef;

  toggleContent() {
    this.isExpanded = !this.isExpanded;

    // Scroll only if expanding
    if (this.isExpanded) {
      setTimeout(() => {
        if (this.expandContent && this.expandContent.nativeElement) {
          this.expandContent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Delay slightly for DOM rendering
    }
  }
  
}
