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
      title: 'Experienced Professionals',
      description: 'Our skilled, certified technicians bring years of expertise to every job.'
    },
    {
      icon: 'bi bi-tools',
      title: 'Comprehensive Services',
      description: 'We offer repair, cleaning, installation, and uninstallation services all in one place.'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Customer-Centric Approach',
      description: 'We listen to your needs and provide personalized solutions every time.'
    },
    {
      icon: 'bi bi-cash-stack',
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. Just honest and fair pricing.'
    },
    {
      icon: 'bi bi-award-fill',
      title: 'Quality Assurance',
      description: 'We use high-quality materials and ensure top standards on every project.'
    },
    {
      icon: 'bi bi-shield-fill-check',
      title: 'Satisfaction Guarantee',
      description: 'If you’re not 100% happy, we’ll make it right.'
    }
  ];
}
