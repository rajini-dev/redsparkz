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
  services = [
    {
      title: 'Skilled Professionals',
      description: 'Our team of certified experts is fully equipped to handle kitchens of any size or condition, delivering a deep clean that leaves your kitchen spotless and sanitized.',
      icon: 'build'
    },
    {
      title: 'Eco-Conscious Solutions',
      description: 'We use eco-friendly, non-toxic products that are tough on stains but safe for your family and the environment.',
      icon: 'eco'
    },
    {
      title: 'Tailored Cleaning Packages',
      description: 'We offer customized cleaning packages for any kitchen setup, whether it’s empty, fully equipped, or includes a chimney.',
      icon: 'view_list'
    },
    {
      title: 'Convenient Scheduling',
      description: 'Book at your convenience with flexible scheduling options to fit your busy life.',
      icon: 'schedule'
    },
    {
      title: '100% Satisfaction Guarantee',
      description: 'If you’re not happy with the results, we’ll make it right—guaranteed.',
      icon: 'check_circle'
    }
  ];

}
