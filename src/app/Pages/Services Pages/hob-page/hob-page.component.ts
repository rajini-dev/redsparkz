import { Component } from '@angular/core';

@Component({
  selector: 'app-hob-page',
  templateUrl: './hob-page.component.html',
  styleUrls: ['./hob-page.component.scss']
})
export class HobPageComponent {
  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top on load
  }
  pricingPlans = [
    {
      name: 'Basic',
      price: 499,
      features: ['Basic cleaning', 'Surface scrubbing', '1-hour service'],
    },
    {
      name: 'Standard',
      price: 999,
      features: ['Deep cleaning', 'Parts inspection', '1.5-hour service'],
    },
    {
      name: 'Premium',
      price: 1499,
      features: ['Complete cleaning & repair', 'Full disinfection', '2-hour service'],
    }
  ];

  // Contact us data (for direct links)
  phoneNumber = '+911234567890';
}
