import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gas-stove-page',
  templateUrl: './gas-stove-page.component.html',
  styleUrls: ['./gas-stove-page.component.scss']
})
export class GasStovePageComponent {

  activeServiceIndex = 0;

  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top on load
  }
  

  // Scroll to a specific service section
  scrollToService(serviceId: string, index: number): void {
    const element = document.getElementById(serviceId);
    const headerOffset = 120; // Adjust this value to match the height of your header
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      this.setActiveService(index); // Update active service index
    }
  }

  // Set active service index and update the active class
  setActiveService(index: number) {
    // Remove 'active' class from all service links
    for (let i = 1; i <= 5; i++) {
      const serviceLink = document.getElementById('serviceLink' + i);
      if (serviceLink) {
        serviceLink.classList.remove('active');
      }
    }

    // Add 'active' class to the clicked service link
    const activeLink = document.getElementById('serviceLink' + (index + 1));
    if (activeLink) {
      activeLink.classList.add('active');
    }

    this.activeServiceIndex = index;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const sections = ['service1', 'service2', 'service3', 'service4', 'service5'];

    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (sectionTop >= 0 && sectionTop < windowHeight / 2) {
          this.setActiveService(index);
        }
      }
    });
  }


}
