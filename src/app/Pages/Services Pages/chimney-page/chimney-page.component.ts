import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WarrantyCardPopupComponent } from 'src/app/Components/warranty-card-popup/warranty-card-popup.component';

@Component({
  selector: 'app-chimney-page',
  templateUrl: './chimney-page.component.html',
  styleUrls: ['./chimney-page.component.scss']
})
export class ChimneyPageComponent {
  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top on load
  }
  
  activeServiceIndex = 0;
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
  
  constructor(public dialog: MatDialog) {}

  openWarrantyCard(): void {
    this.dialog.open(WarrantyCardPopupComponent, {
      width: '800px' // Adjust the width here (e.g., '600px', '80%', etc.)
    });
  }

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
issues = [
  {
    issue:'Fan not working',
    price:'150',
  },
  {
    issue:'Low suction',
    price:'150',
  },
  {
    issue:'No light',
    price:'150',
  },
  {
    issue:'Noise issue',
    price:'150',
  },
  {
    issue:'Unknown issue',
    price:'150',
  },
]

slideConfig = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};


  showDetails = false; // Initially hide the section

  toggleDetails() {
    this.showDetails = !this.showDetails; // Toggle the visibility
  }
}
