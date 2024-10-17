import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  isProjectSectionOpen: boolean = false;

  constructor(private router: Router) {}

  toggleProjectSection() {
    this.isProjectSectionOpen = !this.isProjectSectionOpen;
  }

  @Output()
  closeDrawer: EventEmitter<any> = new EventEmitter();

  navigateToExternal(url: string) {
    window.open(url, '_blank');
  }
}
