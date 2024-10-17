import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-page',
  templateUrl: './kitchen-page.component.html',
  styleUrls: ['./kitchen-page.component.scss']
})
export class KitchenPageComponent {
  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top on load
  }
  kitchenServices = [
    {
      serviceName: 'Empty Kitchen Cleaning',
      description: 'Thorough cleaning of an empty kitchen space.',
      price: 999,
    },
    {
      serviceName: 'With Chimney Cleaning',
      description: 'Complete kitchen cleaning including chimney.',
      price: 1499,
    },
    {
      serviceName: 'With Appliances Cleaning',
      description: 'Full cleaning with all appliances included.',
      price: 1499,
    },
    {
      serviceName: 'With Appliances & Chimney Cleaning',
      description: 'Comprehensive cleaning with all appliances and chimney.',
      price: 1999,
    },
    {
      serviceName: 'Full Kitchen Cleaning',
      description: 'Deep cleaning of the entire kitchen.',
      price: 2499,
    },
  ];
}
