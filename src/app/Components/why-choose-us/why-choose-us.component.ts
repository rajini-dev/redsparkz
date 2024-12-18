import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  companyName: string = 'Red Sparkz'; // You can set this dynamically
  whatsappNumber: string = '9344722425'; 
  benefits = [
    {
      icon: 'bi bi-person-check-fill',
      title: 'Certified Technicians',
      description: 'Trained experts for all leading brands and appliance types.'
    },
    {
      icon: 'bi bi-tools',
      title: 'Comprehensive Support',
      description: 'We offer repair, cleaning, installation, and uninstallation services all in one place.'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Fast Doorstep Service',
      description: 'We cover all major locations in Chennai for your convenience.'
    },
    {
      icon: 'bi bi-cash-stack',
      title: 'Affordable Rates',
      description: 'No hidden fees or surprises. Just honest and fair pricing.'
    },
    {
      icon: 'bi bi-award-fill',
      title: 'Quality Assurance',
      description: 'We use high-quality materials and ensure top standards on every project.'
    },
    {
      icon: 'bi bi-shield-fill-check',
      title: 'Quick Turnaround',
      description: 'Same-day service across all major areas in Chennai'
    }
  ];
}
