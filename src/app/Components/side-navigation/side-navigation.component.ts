import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  isProjectSectionOpen: boolean = false;
menuTrigger: any;

  constructor(private router: Router) {}

  toggleProjectSection() {
    this.isProjectSectionOpen = !this.isProjectSectionOpen;
  }

  @Output()
  closeDrawer: EventEmitter<any> = new EventEmitter();

  navigateToExternal(url: string) {
    window.open(url, '_blank');
  }

  isServicesOpen = false; // Property to track the visibility of services

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen; // Toggle the services visibility
  }
}
