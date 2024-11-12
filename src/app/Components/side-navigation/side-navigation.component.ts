import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  @Output() closeDrawer: EventEmitter<any> = new EventEmitter();
  
  isDrawerOpen = false;  // Variable to track if the drawer is open

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen to router events and close the drawer on NavigationEnd
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeDrawer.emit();
        this.isDrawerOpen = false;  // Close the drawer when navigation happens
      }
    });
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    if (this.isDrawerOpen) {
      this.closeDrawer.emit(); // Close the drawer when toggled
    }
  }

  navigateToExternal(url: string) {
    window.open(url, '_blank');
  }

  isServicesOpen = false;

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }
}
